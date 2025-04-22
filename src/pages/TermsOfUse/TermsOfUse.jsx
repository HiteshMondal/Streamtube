import React from 'react';
import './TermsOfUse.css';

const TermsOfUse = () => {
  return (
    <div className="terms-container">
      <h2>Terms of Use</h2>
      <p>
        Welcome to StreamTube. By accessing or using this site, you agree to the following terms:
      </p>
      <ul>
        <li>This project is for educational purposes only and not for commercial use.</li>
        <li>User data may be collected via Firebase for authentication purposes only.</li>
        <li>Content shown (videos, metadata) is fetched from YouTube and TMDb APIs.</li>
        <li>You agree not to misuse the service or its contents in any unlawful way.</li>
        <li>We reserve the right to modify or discontinue this service at any time.</li>
      </ul>
      <p>
        For any questions, please contact the developer directly.
      </p>
    </div>
  );
};

export default TermsOfUse;