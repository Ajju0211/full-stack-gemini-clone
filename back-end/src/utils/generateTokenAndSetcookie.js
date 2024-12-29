import jwt from "jsonwebtoken";

export const generateTokenAndSetcookie = (res, userId) => {
    // Generate a token with the userId as payload
    const token = jwt.sign({ userId:userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });


    // Set the cookie on the response object
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return token;
}
