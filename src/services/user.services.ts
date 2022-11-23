import encryption from "../../config/encryption";
import dbCon from "../../config/db.config"


const authLoginService = async (email: String, password:String) =>{
    const text = `select user_id from accounts where email = '${email}' and password = '${password}';`
    const query = dbCon.query(text)
    .then(res =>{return res.rows[0]})
    .catch(e=> e.stack);
    return query;
}

export default {authLoginService};