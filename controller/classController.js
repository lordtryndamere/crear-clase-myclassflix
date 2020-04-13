var fetch = require('node-fetch')
var classController ={
  async  createClass(req,res){
        let topic = req.params.topic
        let emailhost = req.body.emailhost
  
        fetch(`https://api.zoom.us/v2/users/${emailhost}/meetings`,{
            method:"POST",
            headers:{ 'Content-Type': 'application/json', "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IndxVmVxcW9mU3YyLXBkcE1Sd3dCVHciLCJleHAiOjE1ODc0MDc0OTAsImlhdCI6MTU4NjgwMjY5MH0.UvS9VAODGeu-rMe6da0Rug1OVT_pPojM296ybwGkukc"},
            body: JSON.stringify({
                "topic": topic,
                "type": 2,
                "duration": 120,
                "timezone": "America/Bogota",
                "agenda": "prueba",
                "settings": {
                  "host_video": 1,
                  "participant_video": 0,
                  "cn_meeting": 0,
                  "in_meeting": 0,
                  "join_before_host": 1,
                  "mute_upon_entry": 1,
                  "watermark": 1,
                  "use_pmi": 0,
                  "approval_type": 0,
                  "registration_type": 1,
                  "audio": "both",
                  "auto_recording": "none",
                  "enforce_login": 1,
                  "enforce_login_domains": "",
                  "alternative_hosts": "",
                  "registrants_email_notification": 0
                }
              })
          
        
        }).then(res=>res.json())
        .then(value=>{
            return res.status(200).send({
                code:200,
                response:value
            })
        }  )
        .catch(err=>{
            return res.status(500).send({
                code:500,
                response:"Error "+err
            })
        })


    }
}

module.exports = classController;