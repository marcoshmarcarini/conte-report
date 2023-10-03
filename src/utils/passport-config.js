// utils/passport-config.js
import passport from 'passport'
import FacebookStrategy from 'passport-facebook'

export function initPassport() {
    passport.use(new FacebookStrategy({
        clientID: 'SEU_APP_ID',
        clientSecret: 'SEU_APP_SECRET',
        callbackURL: 'URL_DE_REDIRECIONAMENTO',
        profileFields: ['id', 'displayName', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
        // Aqui você pode salvar o usuário no banco de dados ou processar conforme necessário
        return done(null, profile)
    }));

    passport.serializeUser((user, done) => done(null, user))
    passport.deserializeUser((obj, done) => done(null, obj))
}

export default passport