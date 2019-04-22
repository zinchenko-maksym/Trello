const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const User = require('../models/user')

exports.user_get_users = (req, res, next)=>{
	User.find({})
		.exec()
		.then((a)=>res.json(a))
}
exports.user_signup = (req, res, next) => {  
	User.find({ email: req.body.email })
		.exec()
		.then(user => {
			if (user.length >= 1) {
				return res.status(409).json({
					message: "Mail exists"
				});
			} else {
				bcrypt.hash(req.body.password, 10, (err, hash) => {
					if (err) {
						return res.status(500).json({
							error: err
						});
					} else {
						const user = new User({
							_id: new mongoose.Types.ObjectId(),
							email: req.body.email,
							password: hash
						});
						user
							.save()
							.then(result => {
								res.status(201).json({
									message: "User created"
								});
							})
							.catch(err => {
								console.log(err);
								res.status(500).json({
									error: err
								});
							});
					}
				});
			}
		});
}


exports.user_login = (req, res, next)=>{
	User.findOne({ email: req.body.email})
	.exec()
	.then(user => {
		
		if(!user){
			return res.status(401).json({
				message: 'Auth failed'
			});
		}
		bcrypt.compare(req.body.password, user.password, (err, result)=>{
			if(err){
				return res.status(401).json({
					message: 'Auth failed'
				});
			}
			if(result){
				const token = jwt.sign({
						email: user.email,
						userId: user._id
					}, "secret"/*process.env.JWT_KEY*/,
					{
						expiresIn: "1h"
					});
				return res.status(200).json({
					message: "Auth successful",
					token: token
				})
			}
			return res.status(401).json({
				message: 'Auth failed'
			});
		});
		
	})
	.catch(err=>{
		console.log(err);
		res.status(500).json({
			error: err
		});
	});

}


exports.user_delete = (req, res, next)=>{
	User.remove({})
	.exec()
	.then(result=>{
		res.status(200).json({
			message: 'User deleted'
		})
	})
	.catch(err=>{
		console.log(err);
			res.status(500).json({
				error: err
			});
	});
}