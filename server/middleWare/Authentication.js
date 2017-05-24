import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config({ silent: true });

const secret = process.env.SECRET || 'Happypeopledontkeepsecret';

const Authentication = {
  verifyUser(request, response, next) {
    const token = request.body.token || request.query.token ||
      request.headers.authorization || request.headers['x-access-token'];
    if (!token) {
      return response.status(401).send({ message: 'No token was provided' });
    }
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        response.status(401).send({ message: 'Invalid token' });
      } else {
        request.decodedToken = decoded;
        next();
      }
    });
  },
};

export default Authentication;
