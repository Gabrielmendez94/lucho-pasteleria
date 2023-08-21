

export const getUsers = async (req, res) =>{
    res.send({status: 'Success', result: 'getUsers'});
};

export const getUserById = async (req, res)=>{
    res.send({status: 'Success', result: 'getUserById'});
};

export const saveUser = async (req, res)=>{
    res.send({status: 'Succes', result: 'saveUser'});
};