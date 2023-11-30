let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}

let getAbout = (req, res) => {
    return res.render("test/about.ejs")
}

export default {
    getHomePage: getHomePage,
    getAbout: getAbout
};