// utils/passport-config.js
import passport from 'passport'
import FacebookStrategy from 'passport-facebook'

export function initPassport() {
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: 'http://localhost:3000/report',
        profileFields: ['id', 'displayName', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
        // Aqui você pode salvar o usuário no banco de dados ou processar conforme necessário
        if(!profile.emails || profile.emails.length === 0){
            console.log('Autenticação bem-sucedida. Prefil: ', profile)
            return done(null, false, { message: 'Email not found' })
        }
        return done(null, profile)
    }));

    passport.serializeUser((user, done) => done(null, user))
    passport.deserializeUser((obj, done) => done(null, obj))
}

export default passport