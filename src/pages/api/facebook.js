// pages/api/facebook.js
import passport from 'passport';
import { initPassport } from '../../utils/passport-config';

initPassport();

export default function facebook(req, res, next) {
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/erro',
    })(req, res, next);
}