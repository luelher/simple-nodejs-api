import knex from './connection'

var emails_groups = {
  getGroupsByMail (email){
    return knex.select('group').from('emails_groups').where({email: email})
  }
}

module.exports = emails_groups;

