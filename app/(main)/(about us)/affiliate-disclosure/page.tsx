

import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Affiliate Disclosure",
    alternates:{
        canonical:`${process.env.NEXT_PUBLIC_BASE_URL}/affiliate-disclosure`
    },
    description: "Our mission, extending to our participation in affiliate marketing programs",
    twitter:{
      card:"summary_large_image"
    }
  
  };


const AffiliateDisclosurePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between lg:p-20 md:p-24 py-20">
            <div className=" prose prose-xl">
                <header>
                    <h1>Affiliate Disclosure</h1>
                </header>

                <section>
                    <h2>Introduction</h2>
                    <p>Welcome to Explore Wise Tips, your go-to resource for insightful travel information, tips, and recommendations. Our commitment to transparency is at the forefront of our mission, extending to our participation in affiliate marketing programs.</p>
                    <p>We want to ensure that you, our valued audience, have a clear understanding of how these programs work and how they contribute to the continuous improvement of our platform.</p>
                </section>

                <section>
                    <h2>Affiliate Relationships</h2>
                    <p>Explore Wise Tips actively engages in various affiliate marketing programs. This means that, as a user, you may come across affiliate links throughout our site. By making a purchase through these links, we may earn a commission at no additional cost to you.</p>
                    <p>Our affiliate partnerships are established with reputable companies and brands that align with the travel-focused content we provide. These collaborations play a crucial role in supporting the costs associated with maintaining and updating Explore Wise Tips, ensuring that we can continue to deliver high-quality content to you.</p>
                    <p>It&apos;s important to note that while we may receive compensation for purchases made through affiliate links, it does not impact the price you pay for the products or services. Our primary goal is to offer you valuable recommendations that enhance your travel experiences.</p>
                </section>

                <section>
                    <h2>Product Recommendations</h2>
                    <p>At Explore Wise Tips, we take pride in our independent editorial content. Our recommendations are not influenced by our affiliate partnerships. We are dedicated to providing honest and unbiased information to assist you in making informed decisions about travel products, services, and destinations.</p>
                    <p>We only recommend products and services that align with our standards and that we genuinely believe will add value to our readers. Our team thoroughly researches and tests recommendations to ensure their quality and relevance to your travel needs.</p>
                    <p>While we appreciate your support through affiliate purchases, please be assured that it does not affect the integrity of our content or the transparency we maintain with our audience.</p>
                </section>

                <section>
                    <h2>Transparency and Trust</h2>
                    <p>Transparency is a core value at Explore Wise Tips. We want you to trust that our recommendations are based on merit and the genuine desire to enhance your travel experiences. By disclosing our affiliate relationships, we aim to maintain openness and honesty with our audience.</p>
                    <p>If you have any questions or concerns regarding our affiliate relationships or the products and services we recommend, we encourage you to reach out. Your feedback is invaluable to us, and we are here to address any queries you may have. You can <a href="/contact">contact us here</a>.</p>
                </section>

                <section>
                    <h2>Changes to the Affiliate Disclosure</h2>
                    <p>This Affiliate Disclosure is subject to change without notice. It was last updated on [Date]. Any updates or modifications will be promptly reflected on this page. We recommend checking this page regularly for the latest information regarding our affiliate relationships and any changes to our disclosure policies.</p>
                    <p>We are committed to keeping you informed and maintaining the highest level of transparency as we evolve and improve our platform to better serve your travel needs.</p>
                </section>

                <footer>
                    <p>Thank you for your trust and support as you explore wise tips for your travel adventures. Your engagement with our affiliate links directly contributes to the growth and sustainability of Explore Wise Tips.</p>
                    <p>Last updated: [9/01/2024]</p>
                </footer>
            </div>
        </main>
    );
}

export default AffiliateDisclosurePage;