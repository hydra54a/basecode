
import dbCon from "../../config/db.config"


const salary = async (data: any) =>{
    const {name,salary,currency,department,sub_department,on_contract} = data;
    const text = `insert into Salary (name,salary,currency,department,sub_department,on_contract)values('${name}','${salary}','${currency}','${department}','${sub_department}','${on_contract}') RETURNING *;`
    const query = dbCon.query(text)
    .then(res =>{return res.rows[0]})
    .catch(e=> e.stack);
    return query;
}

const deleteSalary = async (id: any) =>{
    const text = `delete from Salary where id=${id} RETURNING *;`
    const query = dbCon.query(text)
    .then(res =>{return res.rows[0]})
    .catch(e=> e.stack);
    return query;
}

const getSalary = async(data: any) => {
    let text;
    if(data.min && data.max){
        text = `select * from Salary where 
        salary in(select max(salary) from Salary
        union
        select min(salary) from Salary)`;        
    }else if (data.max) {
        text = `select * from Salary where salary>="${data.max}"`;
    } else if(data.min){
        text = `select * from Salary where salary<="${data.min}"`;
    }else{
        text = `select * from Salary `;
    }
    console.log(text)
    const query = dbCon.query(text)
    .then(res =>{return res.rows})
    .catch(e=> e.stack);
    return query;
}

export default {
    salary,
    deleteSalary,
    getSalary
};