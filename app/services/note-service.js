const BaseService = require('./base-service');
const Note = require('../(models)/Note')

class NoteService extends BaseService {
  model = Note
}

module.exports = new NoteService();