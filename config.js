const PORT = process.env.PORT || 5000;
const ODPID_SERVICE = process.env.ODPID_SERVICE || "http://localhost:3000";
const EXPLORE_SERVICE = process.env.EXPLORE_SERCICE || "http://localhost:8080";
const URN_PROTOCOL = process.env.URN_PROTOCOL || "did" ;
const URN_TYPE = process.env.URN_TYPE || "odpid" ;

module.exports = {
    PORT,
    ODPID_SERVICE,
    EXPLORE_SERVICE,
    URN_PROTOCOL,
    URN_TYPE,
}