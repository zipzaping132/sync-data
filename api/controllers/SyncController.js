/**
 * SyncController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  subscribe: function (req, res) {
    roomName = 'syncRoom';

    sails.sockets.join(req, roomName, function (err) {
      if (!req.isSocket) {
        return res.badRequest();
      }

      if (err) {
        return res.serverError(this.err);
      }

      return res.json({
        message: 'Subscribed to ' + roomName + '!'
      });
    });
  },

  sync: function (req, res) {
    body = req.body;
    data = body.data;

    roomName = 'syncRoom';

    // Join to room syncRoom
    sails.sockets.join(req, roomName);

    // Broadcast a notification to all the sockets who have joined the "syncRoom" room
    sails.sockets.broadcast(roomName, 'broadcast', { message: data }, req);

    return res.json({
      message: 'Broadcasted'
    });
  }

};
