import express from 'express'
import emails_groups from './emails_groups.js'

const error = {
  internalServerError (error, req, res) {
    res.status(500)
    res.json({ error })
  }
}

const api = {
  /**
   *
   * @get /index
   *
   */

  index (req, res){

    if(req.query.email) {
      
      emails_groups.getGroupsByMail(req.query.email).then(groups => {
        res.json({
          stats: {
            count: groups.length
          },
          groups: groups.map(m => m.group)
        })
      }).catch(err => error.internalServerError(err, req, res));

    } else {
      res.status(404).send('Not found');
    }

  },

}

const PORT = process.env.PORT || 3000
const app = express()

/**
 *
 * Routes
 *
 */

 /** GET **/
app.get('/', api.index)

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
});
