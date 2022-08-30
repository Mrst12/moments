import { rest } from "msw"

const baseURL = "https://lisas-drf-api.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 1,
                username: "lisa",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 1,
                profile_image:
                    "https://res.cloudinary.com/mrst12/image/upload/v1/media/images/my-profile-pic_wrxlt2"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];