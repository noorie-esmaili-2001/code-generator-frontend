import Breadcrumb from "@/components/Common/Breadcrumb";
import Generative from "@/components/Generative";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Page | Free Next.js Template for Startup and SaaS",
    description: "This is Contact Page for Startup Nextjs Template",
};

const GenerativeAI = () => {
    return (
        <>
            <Breadcrumb
                pageName="Generative AI"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
            />

            <Generative />
        </>
    );
};

export default GenerativeAI;
