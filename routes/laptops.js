var express = require('express')
var Laptop = require('../models').Laptop
var Sequelize = require('sequelize')

var router = express.Router()

router.get('/', function(req, res, next){
    Laptop.findAll({order: ['serialNumber']}, {where: req.query}).then( laptops => {
        return res.json(laptops)
    }).catch( err => next(err) )
})

router.get('/:id', function(req, res, next) {
  Laptop.findByPk(req.params.id).then(laptop => {
    if (laptop) {
      res.json(laptop)
    } else {
      res.status(404).send('Laptop not found')
    }
  }).catch( err => next(err) )
})

router.post('/', function(req, res, next){
  Laptop.create(req.body).then( (data) => {
    return res.send('ok')
  }).catch( err => {
    console.log(err)
    if (err instanceof Sequelize.ValidationError) {
      let messages = err.errors.map( (e) => e.message)
      return res.status(400).json(messages)
    }
    return next(err)
  })
})

router.patch('/:id', function(req, res, next){
  Laptop.update(
    req.body, {
      where: {
        id: req.params.id
      }
    }).then( (rowsModified) => {
      if (!rowsModified[0]) {
        return res.status(404).send('Not found')
      } else {
        return res.send('Ok')
      }
    }).catch( err => {
      if (err instanceof Sequelize.ValidationError) {
        let messages = err.errors.map( (e) => e.message)
        return res.status(400).json(messages)
      }
      return next(err)
    })
})

router.patch('/:id/employee', function(req, res, next) {
  Laptop.update(req.body, {where: {id: req.params.id}}).then( (rowsModified) => {
    if (rowsModified) {
      return res.send('ok')
    } else {
      return res.status(404).send('Laptop not found')
    }
  }).catch( err => {
    //could be foreign key error - employee ID doesn't exist
    if (err instanceof Sequelize.ForeginKeyConstraintError) {
      return res.status(500).send('Employee does not exist, unable to assign laptop.')
    } else {
      console.log(err)
      return res.status(500).send('Unable to assign laptop')
    }
  })
})

router.delete('/:id', function(req, res, next) {
  Laptop.destroy({where: {id: req.params.id}}).then( rowsModified => {
    return res.send('ok')
  }).catch( err => next(err) )
})

module.exports = router
