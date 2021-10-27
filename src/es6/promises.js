function requestHandler(req,res){
    User.findByID(req.UserId, function(err,user){
        if(err){
            res.send(err)
        }else{
            Tasks.findById(user.taskId,function(err,tasks){
                if(err){
                    return res.send(err)
                }else{
                    tasks.completed=true
                    tasks.save(function(err){
                        if(err){
                            return res.send(err)
                        }else{
                            res.send('Task completed')
                        }
                    })
                }
            })
        }
    })
    // whatever code 

}


function requestHandler(req,res){
    User.findById(req.UserId)
        .then(function(user){
            return Tasks.findById(user.taskId)
        })
        .then(function(task){
            tasks.completed=true
            return tasks.save();
        })
        .then(function(){
            res.send('Tasks completed')
        })
        .catch(function(errors){
            res.send(errors)
        })
}