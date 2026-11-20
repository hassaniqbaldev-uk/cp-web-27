import BookCall from "@/components/sections/BookCall";
import WebsiteReviewHero from "@/components/sections/WebsiteReviewHero";
import WebsiteReviewProcess from "@/components/sections/WebsiteReviewProcess";
import Footer from "@/components/layout/Footer";

const WebsiteReview = () => {
  return (
    <>
      <WebsiteReviewHero />
      <WebsiteReviewProcess />
      <BookCall id="website-review-book-call" />
      <Footer />
    </>
  );
};

export default WebsiteReview;
