import User from '../model/user_signupSchema.js';

export const signupData = async (request, response) => {
    try {

        const exist = await User.findOne({ username: request.body.username });

        if(exist) {
            return response.status(400).json("Username already exists");
        }
        
        const data = request.body;
        const newUser = new User(data);
        await newUser.save();
        response.status(201).json(newUser);
        console.log("User signed up successfully");
       
    } catch (error) {
        response.status(500).json({ message: error.message });
       
    }
};
export const loginData = async (request, response) => {
    try {
        const username = request.body.username;
        const password = request.body.password;

        let userExist = await User.findOne({ username: username ,password: password });

        if(userExist) {
            return response.status(200).json({data:userExist});
        }else{
            return response.status(400).json("Invalid Credentials");
        }



    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};


// 404 page not found
// 500 internal server error

// 400 bad request
// 201 created / succes
// 200 ok