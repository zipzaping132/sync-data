module.exports = {

    hello: function (req, res) {

        // Make sure this is a socket request (not traditional HTTP)
        if (!req.isSocket) {
            return res.badRequest();
        }

        // Have the socket which made the request join the "funSockets" room.
        sails.sockets.join(req, 'funSockets');

        // Broadcast a notification to all the sockets who have joined
        // the "funSockets" room, excluding our newly added socket:
        sails.sockets.broadcast('funSockets', 'hello', { howdy: 'hi there!' }, req);

        return res.json({
            anyData: 'we want to send back'
        });
    }
}