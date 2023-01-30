import Responsive from "svgr/responsive.svg";
import Unlimit from "svgr/no-limit.svg";
import Embed from "svgr/embed.svg";
import Custom from "svgr/custom-domain.svg";
import Boost from "svgr/boost-exposure.svg";
import Drag from "svgr/drag-drop.svg";
export const tools = [
    {
        icon: <Responsive />,
        header: "100% Responsive",
        paragraph:
            "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
    },
    {
        icon: <Unlimit />,
        header: " No Photo Upload Limit",
        paragraph:
            "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
    },
    {
        icon: <Embed />,
        header: "Available to Embed",
        paragraph:
            " Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
    },

    {
        icon: <Custom />,
        header: "Custom Domain",
        paragraph:
            "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
    },
    {
        icon: <Boost />,
        header: " Boost Your Exposure",
        paragraph:
            "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
    },
    {
        icon: <Drag />,
        header: "Drag & Drop Image",
        paragraph:
            " Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
    }
];
