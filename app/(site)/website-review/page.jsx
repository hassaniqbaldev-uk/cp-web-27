import BookCall from "@/components/sections/BookCall";
import WebsiteReviewHero from "@/components/sections/WebsiteReviewHero";
import WebsiteReviewProcess from "@/components/sections/WebsiteReviewProcess";

const WebsiteReview = () => {
  return (
    <>
      <WebsiteReviewHero />
      <WebsiteReviewProcess />
      <BookCall id="website-review-book-call" />
    </>
  );
};

export default WebsiteReview;
