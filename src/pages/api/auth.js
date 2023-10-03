// pages/api/auth.js
import passport from 'passport';
import { initPassport } from '../../utils/passport-config';

initPassport();

export default function handler(req, res) {
    passport.authenticate('facebook', { scope: ['email'] })(req, res, () => {});
}