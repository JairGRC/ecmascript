function requestHandler(req,res){
    User.findByID(req.UserID, function(err,user){
        if(err){
            res.send(err)
        }else{
            Tasks.findByID(user.taskId,function(err,tasks){
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