import facebookURL from "../../assets/logos/social/ic_baseline-facebook.png"
import GoogleURL from "../../assets/logos/social/ri_google-fill.png"
import instaURL from "../../assets/logos/social/ri_instagram-fill.png"

const Links = [
    {
        text: "Our Services",
        url: "/ourservice"
    },
    {
        text: "Why Choose Us",
        url: "/whychooseus"
    },
    {
        text: "Our Clients",
        url: "/"
    },
    {
        text: "Book A Visit",
        url: "/"
    },
    {
        text: "Contact Us",
        url: "/"
    },
]

const Social = [
    {
        text: "Facebook",
        url: "/",
        image: facebookURL
    },
    {
        text: "Instagram",
        url: "/",
        image: instaURL
    },
    {
        text: "Google",
        url: "/",
        image: GoogleURL
    },
]

const linkText = "Get In Touch"

export {
    linkText, Links, Social
}