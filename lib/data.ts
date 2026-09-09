export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  articleCount: number;
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  updatedAt: string;
  content: string;
};

export const categories: Category[] = [
  {
    slug: "banking",
    title: "Banking Safety",
    tagline: "Protect your money & accounts",
    description:
      "Learn how to keep your bank accounts, cards, and transactions safe from fraud, phishing, and scams.",
    color: "text-trust",
    bgColor: "bg-trust-light",
    borderColor: "border-trust",
    icon: "🏦",
    articleCount: 5,
  },
  {
    slug: "upi",
    title: "UPI Safety",
    tagline: "Secure every digital payment",
    description:
      "Everything you need to know about safe UPI transactions, avoiding payment frauds, and protecting your PIN.",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-500",
    icon: "📲",
    articleCount: 4,
  },
  {
    slug: "travel",
    title: "Travel Safety",
    tagline: "Stay safe on every journey",
    description:
      "Essential safety tips for domestic and international travel — from booking safely to handling emergencies abroad.",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    icon: "✈️",
    articleCount: 4,
  },
  {
    slug: "lost-items",
    title: "Lost Items",
    tagline: "What to do when things go missing",
    description:
      "Step-by-step guides for reporting lost documents, phones, wallets, and cards — and preventing identity theft.",
    color: "text-rose-700",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-500",
    icon: "🔍",
    articleCount: 4,
  },
  {
    slug: "online-safety",
    title: "Online Safety",
    tagline: "Guard your digital life",
    description:
      "Protect yourself from phishing, scams, data breaches, and social media threats with expert digital hygiene tips.",
    color: "text-violet-700",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-500",
    icon: "🛡️",
    articleCount: 4,
  },
];

export const articles: Article[] = [
  // BANKING
  {
    slug: "how-to-spot-bank-phishing-scams",
    category: "banking",
    title: "How to Spot & Avoid Bank Phishing Scams",
    excerpt:
      "Fraudsters send fake emails and SMS messages that look exactly like your bank. Here's how to tell them apart from the real thing.",
    readTime: "6 min read",
    difficulty: "Beginner",
    tags: ["Phishing", "SMS Fraud", "Email Safety"],
    updatedAt: "April 2025",
    content: `
<h2>What is Bank Phishing?</h2>
<p>Phishing is when a scammer impersonates your bank — via email, SMS, or phone call — to trick you into giving up your account details, passwords, or OTPs. It is the most common form of banking fraud in India.</p>

<div class="tip-box">
  <strong>Key rule:</strong> Your bank will NEVER ask for your PIN, password, or full card number over phone, SMS, or email — ever.
</div>

<h2>Red Flags in SMS & Emails</h2>
<ul>
  <li>Urgent language: "Your account will be blocked in 24 hours!"</li>
  <li>Links that don't end in the bank's official domain (e.g., sbi.gov.in, hdfcbank.com)</li>
  <li>Requests to "verify your account" or "update KYC immediately"</li>
  <li>Generic greetings like "Dear Customer" instead of your name</li>
  <li>Spelling errors or odd formatting</li>
</ul>

<h2>How to Verify a Message is Real</h2>
<ul>
  <li>Never click links in SMS — go directly to your bank's website by typing the URL</li>
  <li>Check the sender ID — official bank SMS comes from alphanumeric IDs (e.g., HDFCBK), not 10-digit mobile numbers</li>
  <li>Call your bank's official helpline (printed on your card) to verify</li>
  <li>Log in through the official app or website, not through any link</li>
</ul>

<div class="warning-box">
  <strong>If you receive a suspicious call:</strong> Hang up and call your bank directly using the number on their official website or the back of your card.
</div>

<h2>What to Do If You're Targeted</h2>
<ul>
  <li>Do NOT click any links or share any details</li>
  <li>Report the SMS/email to your bank's fraud helpline</li>
  <li>Forward suspicious SMS to 1909 (TRAI's spam reporting number)</li>
  <li>File a complaint at cybercrime.gov.in if you've already shared details</li>
</ul>
    `,
  },
  {
    slug: "card-safety-tips",
    category: "banking",
    title: "Debit & Credit Card Safety: Complete Guide",
    excerpt:
      "From skimming at ATMs to online card fraud — here's everything you need to protect your cards.",
    readTime: "8 min read",
    difficulty: "Beginner",
    tags: ["Card Safety", "ATM", "Online Shopping"],
    updatedAt: "March 2025",
    content: `
<h2>ATM Safety</h2>
<p>ATM skimming — where thieves attach devices to read your card data — is a real threat. Follow these steps every time you use an ATM.</p>
<ul>
  <li>Wiggle the card slot before inserting — skimmers are loose and will move</li>
  <li>Cover the keypad with your other hand while entering your PIN</li>
  <li>Prefer ATMs inside bank branches over standalone kiosks</li>
  <li>If the ATM looks tampered with, do not use it — report it to the bank</li>
</ul>

<h2>Online Shopping Safety</h2>
<ul>
  <li>Only shop on websites with HTTPS (padlock icon in browser)</li>
  <li>Use virtual cards or limited-balance cards for online purchases</li>
  <li>Enable transaction alerts via SMS and email</li>
  <li>Never save card details on unfamiliar websites</li>
</ul>

<div class="tip-box">
  <strong>Pro Tip:</strong> Most banks offer a "virtual card" feature in their app — use it for online payments. It generates a temporary card number, keeping your real card safe.
</div>

<h2>Setting Up Strong Card Security</h2>
<ul>
  <li>Set international transactions to OFF by default — enable only when travelling</li>
  <li>Set a daily transaction limit in your banking app</li>
  <li>Enable 2FA/OTP for all online transactions</li>
  <li>Register your card for 3D Secure (Verified by Visa / Mastercard SecureCode)</li>
</ul>

<div class="danger-box">
  <strong>If your card is stolen or compromised:</strong> Block it immediately through your bank's app or by calling the helpline. Most banks have a 24/7 card blocking service.
</div>
    `,
  },
  {
    slug: "safe-net-banking-habits",
    category: "banking",
    title: "10 Safe Net Banking Habits Everyone Should Have",
    excerpt: "Simple but powerful habits that can dramatically reduce your risk of online banking fraud.",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: ["Net Banking", "Password Safety", "2FA"],
    updatedAt: "April 2025",
    content: `
<h2>The 10 Habits</h2>

<h3>1. Use a Strong, Unique Password</h3>
<p>Your banking password should be at least 12 characters, mixing letters, numbers, and symbols. Never use the same password as any other site.</p>

<h3>2. Enable Two-Factor Authentication</h3>
<p>Always enable OTP-based 2FA. This means even if someone steals your password, they still can't log in without your phone.</p>

<h3>3. Never Bank on Public Wi-Fi</h3>
<p>Coffee shop and airport Wi-Fi can be intercepted. Always use mobile data or a trusted home network for banking.</p>

<h3>4. Log Out After Every Session</h3>
<p>Always click "Log Out" — don't just close the browser tab. This invalidates your session token.</p>

<h3>5. Check Your Statement Weekly</h3>
<p>Review transactions regularly. Fraudsters often make small test transactions before larger ones.</p>

<div class="tip-box">
  <strong>Set up instant SMS alerts</strong> for every transaction — most banks offer this for free.
</div>

<h3>6. Keep Your Browser & App Updated</h3>
<p>Security patches are released regularly. Outdated apps have known vulnerabilities.</p>

<h3>7. Use Official Bank Apps Only</h3>
<p>Download only from the official App Store or Google Play. Search for your bank's official app and verify the developer name.</p>

<h3>8. Never Share OTPs</h3>
<p>No bank employee, government official, or support agent will ever ask for your OTP. If someone does, it's a scam.</p>

<h3>9. Use a Dedicated Email for Banking</h3>
<p>Keep a separate email address just for banking — don't use it for social media or shopping. This reduces phishing exposure.</p>

<h3>10. Register for Banking Alerts</h3>
<p>Register your mobile number with your bank for all transaction alerts, login alerts, and failed attempt notifications.</p>
    `,
  },
  {
    slug: "what-to-do-after-banking-fraud",
    category: "banking",
    title: "What to Do Immediately After Banking Fraud",
    excerpt: "If money is stolen from your account, every minute counts. Here is the exact sequence of steps to take.",
    readTime: "7 min read",
    difficulty: "Beginner",
    tags: ["Fraud Recovery", "Complaint", "RBI"],
    updatedAt: "April 2025",
    content: `
<h2>Act Within the First 30 Minutes</h2>
<p>The faster you report banking fraud, the better your chances of recovering money. RBI guidelines give banks a liability framework based on how quickly you report.</p>

<div class="danger-box">
  <strong>Step 1 — Block your account immediately:</strong> Call your bank's 24/7 helpline or use the banking app to block your card and freeze transactions.
</div>

<h2>Step-by-Step Recovery Process</h2>

<h3>Step 2 — Change All Credentials</h3>
<ul>
  <li>Change your net banking password from a safe device</li>
  <li>Change your UPI PIN</li>
  <li>Change your ATM PIN</li>
</ul>

<h3>Step 3 — File a Complaint with Your Bank</h3>
<ul>
  <li>Call the bank helpline and get a complaint/reference number — save it</li>
  <li>Visit the branch and submit a written complaint with transaction details</li>
  <li>Email your bank's nodal officer (email listed on bank website)</li>
</ul>

<h3>Step 4 — File a Cybercrime Complaint</h3>
<ul>
  <li>Go to cybercrime.gov.in — available 24/7</li>
  <li>Call the National Cybercrime Helpline: 1930</li>
  <li>Provide transaction IDs, amounts, dates, and any screenshots</li>
</ul>

<h3>Step 5 — File an FIR (if needed)</h3>
<ul>
  <li>Visit your local police station for an FIR if the amount is significant</li>
  <li>This also helps when escalating to the banking ombudsman</li>
</ul>

<div class="tip-box">
  <strong>RBI Rule:</strong> If the fraud is due to bank negligence (not your mistake), you have zero liability. If reported within 3 working days of receiving the transaction alert, your maximum liability is ₹5,000–₹10,000 depending on account type.
</div>

<h2>Escalation Path</h2>
<ul>
  <li>If bank doesn't resolve in 30 days → file with RBI Banking Ombudsman at cms.rbi.org.in</li>
  <li>You can also approach the consumer forum for compensation</li>
</ul>
    `,
  },
  {
    slug: "kyc-fraud-prevention",
    category: "banking",
    title: "KYC Fraud: How Scammers Exploit Your Documents",
    excerpt: "Fake KYC requests are among the fastest-growing frauds. Learn how to identify them and protect your identity.",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: ["KYC", "Identity Theft", "Documents"],
    updatedAt: "March 2025",
    content: `
<h2>What is KYC Fraud?</h2>
<p>Scammers pose as bank officials, telecom company representatives, or government agents claiming your KYC is "expired" or "incomplete." They then collect your Aadhaar, PAN, or bank details to commit fraud or take over your accounts.</p>

<div class="danger-box">
  <strong>Critical fact:</strong> KYC is a one-time process done at your bank branch. Banks will NEVER ask you to complete KYC via SMS links, phone calls, or third-party apps.
</div>

<h2>Common KYC Scam Scenarios</h2>
<ul>
  <li>SMS saying "Your account will be closed — complete KYC via this link"</li>
  <li>Call from someone claiming to be your bank's KYC department</li>
  <li>WhatsApp message asking you to send a photo of your Aadhaar or PAN</li>
  <li>Requests to install apps like AnyDesk or TeamViewer for "KYC verification"</li>
</ul>

<div class="warning-box">
  <strong>Never install screen-sharing apps</strong> at someone's request — these give scammers full control of your phone and access to your banking apps.
</div>

<h2>How Real KYC Works</h2>
<ul>
  <li>Done in person at your bank branch</li>
  <li>Or through your bank's official app with a verified video KYC process</li>
  <li>Bank sends a physical letter or official in-app notification — never a random SMS link</li>
</ul>

<h2>If You've Already Shared Details</h2>
<ul>
  <li>Call your bank immediately to flag the account</li>
  <li>Report to cybercrime.gov.in with all details of the conversation</li>
  <li>Consider locking your Aadhaar via UIDAI's website (myaadhaar.uidai.gov.in)</li>
</ul>
    `,
  },

  // UPI
  {
    slug: "upi-safety-guide",
    category: "upi",
    title: "The Complete UPI Safety Guide",
    excerpt: "Everything you need to know about keeping your UPI transactions safe — from PIN security to scam prevention.",
    readTime: "8 min read",
    difficulty: "Beginner",
    tags: ["UPI", "BHIM", "PhonePe", "GPay"],
    updatedAt: "April 2025",
    content: `
<h2>Understanding UPI Security</h2>
<p>UPI (Unified Payments Interface) is one of the world's most secure payment systems — but scammers have found ways to exploit human behaviour, not the technology itself. Your PIN and your judgment are your most important defenses.</p>

<div class="tip-box">
  <strong>Golden Rule:</strong> You only enter your UPI PIN when SENDING money. If someone asks you to enter your PIN to RECEIVE money, it's a scam. There is no such thing as a "receive PIN."
</div>

<h2>Common UPI Scams</h2>

<h3>1. Collect Request Scam</h3>
<p>A scammer sends a UPI collect request with a message like "₹10,000 cashback — just approve." When you enter your PIN, money is sent TO them, not received.</p>

<h3>2. Screenshot/QR Code Scam</h3>
<p>Scammer sends a QR code claiming it's for receiving payment. Scanning and approving it actually debits your account.</p>

<h3>3. Customer Care Fraud</h3>
<p>You search "PhonePe customer care number" and call a fake number. They ask you to share your UPI ID or install an app to "fix your issue."</p>

<h3>4. OLX/Marketplace Scam</h3>
<p>A fake "army officer" or buyer overpays and asks you to return the extra — then the original payment bounces while yours goes through.</p>

<div class="danger-box">
  <strong>Never share:</strong> Your UPI PIN, OTP, registered mobile number, or Aadhaar linked to your bank with anyone — including people claiming to be from payment apps.
</div>

<h2>Safe UPI Practices</h2>
<ul>
  <li>Always verify the recipient's name before confirming a payment</li>
  <li>Use UPI apps only from official app stores</li>
  <li>Set a transaction limit in your UPI app settings</li>
  <li>Enable app lock/biometric on your UPI app</li>
  <li>Regularly check linked bank accounts and remove old ones</li>
  <li>Report suspicious UPI IDs via the "Report" option in your app</li>
</ul>
    `,
  },
  {
    slug: "upi-pin-best-practices",
    category: "upi",
    title: "UPI PIN: How to Create & Protect It",
    excerpt: "Your UPI PIN is the key to your money. Here's how to create a strong one and never get tricked into sharing it.",
    readTime: "4 min read",
    difficulty: "Beginner",
    tags: ["UPI PIN", "Security"],
    updatedAt: "February 2025",
    content: `
<h2>What is a UPI PIN?</h2>
<p>Your UPI PIN (Personal Identification Number) is a 4-6 digit code that authorises UPI transactions from your bank account. It is set by you and known only to you — not even your bank knows it.</p>

<h2>How to Create a Strong PIN</h2>
<ul>
  <li>Avoid obvious patterns: 1234, 0000, 1111, your birth year</li>
  <li>Don't use the same PIN as your ATM card</li>
  <li>Use a combination that isn't personally meaningful (avoid anniversary dates, etc.)</li>
  <li>Change your PIN every 3-6 months</li>
</ul>

<div class="danger-box">
  <strong>Absolute rule:</strong> Never share your UPI PIN with anyone. Ever. For any reason. No bank, no payment company, no government agency needs your PIN.
</div>

<h2>How to Change Your UPI PIN</h2>
<ul>
  <li>Open your UPI app (GPay, PhonePe, Paytm, BHIM, etc.)</li>
  <li>Go to Profile → Bank Accounts → Change UPI PIN</li>
  <li>You'll need your debit card's last 6 digits and expiry date to reset</li>
  <li>An OTP will be sent to your registered mobile number for verification</li>
</ul>

<div class="tip-box">
  <strong>If you forget your PIN:</strong> Use the "Forgot PIN" option in your UPI app. You'll reset it using your debit card details — you don't need to visit a bank.
</div>

<h2>When Is Your PIN Asked For?</h2>
<p>Only when YOU initiate a payment. If you see a PIN prompt when trying to receive money or when someone else has asked you to approve something — abort immediately and report it.</p>
    `,
  },
  {
    slug: "fake-upi-screenshot-scam",
    category: "upi",
    title: "The Fake Payment Screenshot Scam",
    excerpt: "Scammers send fake payment confirmation screenshots to trick sellers. Here's how to verify you've actually received money.",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: ["Screenshot Fraud", "Seller Safety", "OLX"],
    updatedAt: "April 2025",
    content: `
<h2>How the Scam Works</h2>
<p>You're selling something online. The buyer says they've paid and sends a screenshot of a payment confirmation. You hand over the item or service — but the payment never actually arrived.</p>
<p>These screenshots are either edited or generated using fake payment apps that mimic the real interface.</p>

<h2>How to Actually Verify a Payment</h2>
<ul>
  <li>Open your UPI app and check your transaction history directly</li>
  <li>Check your bank's SMS transaction alert (should arrive within seconds)</li>
  <li>Log into your banking app and verify the balance has actually changed</li>
  <li>Wait for the SMS alert — don't rely on the buyer's screenshot at all</li>
</ul>

<div class="tip-box">
  <strong>Simple rule:</strong> If you haven't received an SMS from your bank confirming the credit, the money is not in your account — regardless of any screenshot.
</div>

<h2>For High-Value Transactions</h2>
<ul>
  <li>Ask for NEFT/RTGS for transactions above ₹5,000 — these leave a clear bank trail</li>
  <li>Only release goods after you see the money in your bank account for 24 hours</li>
  <li>For cash on delivery, only accept fresh notes directly</li>
</ul>

<div class="warning-box">
  <strong>Fake payment apps to be aware of:</strong> There are several apps on unofficial Android stores that mimic UPI payment confirmations. They are not available on official app stores, but buyers may have downloaded them. Always verify on YOUR end.
</div>
    `,
  },
  {
    slug: "upi-fraud-reporting",
    category: "upi",
    title: "How to Report UPI Fraud & Recover Money",
    excerpt: "Lost money to a UPI scam? Here's exactly how to report it and what to expect in the recovery process.",
    readTime: "6 min read",
    difficulty: "Beginner",
    tags: ["Fraud Reporting", "NPCI", "Recovery"],
    updatedAt: "April 2025",
    content: `
<h2>Act Immediately</h2>
<p>The faster you report a UPI fraud, the higher the chance of fund recovery. NPCI and banks can sometimes freeze the receiving account before the funds are withdrawn.</p>

<h2>Reporting Steps</h2>

<h3>Step 1 — Report in the UPI App</h3>
<ul>
  <li>Open the transaction in your UPI app</li>
  <li>Tap "Report a Problem" or "Raise Dispute"</li>
  <li>Select "Unauthorised Transaction" or "Fraud"</li>
</ul>

<h3>Step 2 — Call the National Cybercrime Helpline</h3>
<ul>
  <li>Call 1930 immediately — available 24/7</li>
  <li>They can initiate an emergency hold on the fraudster's account</li>
  <li>Note down your complaint number</li>
</ul>

<h3>Step 3 — File Online at cybercrime.gov.in</h3>
<ul>
  <li>Go to cybercrime.gov.in → Financial Fraud → UPI Fraud</li>
  <li>You'll need: transaction ID, date/time, amount, UPI ID of recipient</li>
  <li>Upload any screenshots or communication as evidence</li>
</ul>

<h3>Step 4 — Contact Your Bank</h3>
<ul>
  <li>Call your bank and report the fraudulent debit</li>
  <li>Ask them to raise a chargeback or dispute request with NPCI</li>
</ul>

<div class="tip-box">
  <strong>Recovery timeline:</strong> If you report within hours, there's a reasonable chance of recovery. The process typically takes 7-45 days. Keep all complaint reference numbers safely.
</div>

<h2>What Information to Keep Ready</h2>
<ul>
  <li>Transaction reference/UTR number</li>
  <li>Date, time, and amount of fraud</li>
  <li>Fraudster's UPI ID or phone number</li>
  <li>Any screenshots of the conversation</li>
  <li>Your bank account details (don't share with anyone — only official portals)</li>
</ul>
    `,
  },

  // TRAVEL
  {
    slug: "travel-safety-checklist",
    category: "travel",
    title: "The Pre-Travel Safety Checklist",
    excerpt: "Before you leave home, run through this checklist to ensure your trip starts safely and your home and finances are protected.",
    readTime: "7 min read",
    difficulty: "Beginner",
    tags: ["Pre-Travel", "Documents", "Checklist"],
    updatedAt: "March 2025",
    content: `
<h2>Documents & Identity</h2>
<ul>
  <li>Make photocopies of all important documents: passport, visa, ID, insurance</li>
  <li>Store digital copies in a secure cloud folder (Google Drive, iCloud)</li>
  <li>Note down important numbers: embassy, travel insurance, bank helpline</li>
  <li>Share your itinerary with a trusted family member or friend</li>
</ul>

<h2>Financial Safety Before Travel</h2>
<ul>
  <li>Inform your bank of your travel dates and destination — prevents card blocks</li>
  <li>Enable international transactions on your card (and disable after returning)</li>
  <li>Carry multiple payment methods: card + cash + backup card</li>
  <li>Set daily spending limits on your travel card</li>
  <li>Avoid carrying all cash in one place</li>
</ul>

<div class="tip-box">
  <strong>Pro tip:</strong> Use a travel card or a zero-forex debit card for international trips. These offer better rates and are safer than carrying large amounts of foreign currency.
</div>

<h2>Digital Safety</h2>
<ul>
  <li>Update all apps and your phone's operating system before leaving</li>
  <li>Enable "Find My Device" on your phone</li>
  <li>Back up your phone to the cloud</li>
  <li>Download offline maps (Google Maps or Maps.me) for areas with poor internet</li>
  <li>Consider a travel VPN for public Wi-Fi use</li>
</ul>

<h2>Home Safety Before Leaving</h2>
<ul>
  <li>Don't announce your travel on social media until after you return</li>
  <li>Ask a neighbour to keep an eye on your home</li>
  <li>Set lights on timers to suggest occupancy</li>
  <li>Secure valuables in a safe or secure location</li>
</ul>
    `,
  },
  {
    slug: "travel-booking-scam-prevention",
    category: "travel",
    title: "How to Avoid Travel Booking Scams",
    excerpt: "Fake hotels, fraudulent travel agents, and phishing booking sites cost travellers crores every year. Here's how to stay safe.",
    readTime: "6 min read",
    difficulty: "Beginner",
    tags: ["Booking", "Scams", "Online Travel"],
    updatedAt: "April 2025",
    content: `
<h2>The Most Common Travel Booking Scams</h2>

<h3>Fake Hotel Websites</h3>
<p>Scammers create near-identical copies of legitimate hotel websites. You book and pay — but there's no reservation when you arrive.</p>

<h3>Fake Travel Agents</h3>
<p>Especially common for Hajj, Umrah, pilgrimage, and international visa packages. Fraudsters collect advance payments and disappear.</p>

<h3>Too-Good-to-Be-True Deals</h3>
<p>Heavily discounted packages on unofficial platforms — often leads to either fake bookings or poor-quality services.</p>

<h2>How to Book Safely</h2>
<ul>
  <li>Use only IATA-certified travel agents — verify at iata.org</li>
  <li>Book hotels directly through the hotel's official website or major platforms like MakeMyTrip, Booking.com, Agoda</li>
  <li>Always check the website URL — look for HTTPS and verify the domain is correct</li>
  <li>Read reviews on multiple platforms — Google, TripAdvisor, etc.</li>
  <li>Pay by credit card (not debit/UPI for large bookings) — credit cards offer better fraud protection</li>
</ul>

<div class="tip-box">
  <strong>Get confirmation in writing:</strong> Always demand a written booking confirmation with the full property name, address, check-in/out dates, and booking reference number.
</div>

<h2>Verifying a Travel Agent</h2>
<ul>
  <li>Check if they have a physical address and GST registration</li>
  <li>Look them up on the Ministry of Tourism's registered tour operator list</li>
  <li>Ask for references and read their Google reviews carefully</li>
  <li>Avoid agents who only communicate via WhatsApp with no official email</li>
</ul>

<div class="warning-box">
  <strong>Visa processing scams:</strong> Only use official government visa portals or VFS Global for visa applications. Never pay a "visa agent" who asks for full payment upfront with no receipt.
</div>
    `,
  },
  {
    slug: "what-to-do-if-robbed-while-travelling",
    category: "travel",
    title: "What to Do If You're Robbed While Travelling",
    excerpt: "Losing your wallet, phone, or documents while travelling abroad or in a new city is stressful. Here's a calm, step-by-step guide.",
    readTime: "6 min read",
    difficulty: "Beginner",
    tags: ["Emergency", "Theft", "Abroad"],
    updatedAt: "March 2025",
    content: `
<h2>Stay Calm — Act Systematically</h2>
<p>In the first minutes after a robbery, your priority is personal safety, not possessions. If threatened, do not resist. Material things can be replaced; you cannot.</p>

<h2>Immediate Steps (First 30 Minutes)</h2>

<h3>1. Get to a Safe Location</h3>
<p>Move to a police station, hotel lobby, or public area with people around.</p>

<h3>2. Block Your Cards Immediately</h3>
<ul>
  <li>Call your bank's international helpline (the number should be on your card or saved in your phone's cloud backup)</li>
  <li>Block all debit and credit cards</li>
  <li>Lock UPI transactions via your bank's app (if you have another device)</li>
</ul>

<h3>3. File a Police Report</h3>
<ul>
  <li>Even if the police can't recover your items, you need a report number for insurance claims and document replacement</li>
  <li>Request a copy of the report (FIR equivalent in that country)</li>
</ul>

<h2>Replacing Documents</h2>

<h3>Lost Passport (International Travel)</h3>
<ul>
  <li>Contact the nearest Indian Embassy or Consulate immediately</li>
  <li>Indian Embassy Helpline: +91-11-2301-4104 (MEA 24x7 Helpdesk)</li>
  <li>They can issue an Emergency Certificate to travel home</li>
  <li>You'll need: police report, passport photos, any ID you have (even a photocopy helps)</li>
</ul>

<h3>Lost Aadhaar / PAN (Domestic)</h3>
<ul>
  <li>Reprint Aadhaar: myaadhaar.uidai.gov.in</li>
  <li>Reprint PAN: NSDL or UTI portal</li>
</ul>

<div class="tip-box">
  <strong>Prevention:</strong> Before every trip, email yourself scanned copies of your passport, visa, Aadhaar, PAN, insurance policy, and emergency contact numbers. These are accessible from any device.
</div>
    `,
  },
  {
    slug: "transport-safety-tips",
    category: "travel",
    title: "Safe Travel: Taxi, Cab & Public Transport Tips",
    excerpt: "Whether you're in an Ola, Uber, auto-rickshaw, or unfamiliar public transport, these habits keep you safe.",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: ["Cab Safety", "Transport", "Women Safety"],
    updatedAt: "April 2025",
    content: `
<h2>App-Based Cabs (Ola, Uber, Rapido)</h2>
<ul>
  <li>Always verify: driver name, photo, vehicle number, and car model BEFORE getting in</li>
  <li>Share your live trip details with a trusted contact via the app's share feature</li>
  <li>Sit in the back seat — avoid the front passenger seat with unknown drivers</li>
  <li>Call through the app — avoid sharing your personal number with drivers</li>
  <li>If the driver deviates from the route, call someone and speak loudly about your location</li>
  <li>Rate and report any suspicious behaviour after the trip</li>
</ul>

<div class="tip-box">
  <strong>SOS Feature:</strong> Both Ola and Uber have an in-app emergency SOS button that alerts the police and your emergency contacts simultaneously. Know where it is before you need it.
</div>

<h2>Auto-Rickshaws</h2>
<ul>
  <li>Always insist on the meter — or agree on price before boarding</li>
  <li>Note the registration number (front/rear plate) before getting in</li>
  <li>Share your ETA with family/friends for late-night rides</li>
  <li>Prefer pre-paid auto services at railway stations and airports</li>
</ul>

<h2>Public Transport (Metro, Bus, Train)</h2>
<ul>
  <li>Keep bags in front of you in crowded spaces — not on your back</li>
  <li>Keep your phone out of sight in crowded areas</li>
  <li>Use women-only compartments where available</li>
  <li>Be aware of your surroundings at all times — avoid burying yourself in your phone</li>
</ul>

<div class="warning-box">
  <strong>Never share:</strong> Your destination, accommodation details, or travel plans with strangers, including drivers.
</div>
    `,
  },

  // LOST ITEMS
  {
    slug: "lost-phone-guide",
    category: "lost-items",
    title: "Lost Your Phone? Do These 7 Things Immediately",
    excerpt: "A lost smartphone can mean lost data, drained bank accounts, and identity theft. Here's how to respond fast.",
    readTime: "7 min read",
    difficulty: "Beginner",
    tags: ["Phone", "Device Safety", "Find My Device"],
    updatedAt: "April 2025",
    content: `
<h2>Act Within the First Hour</h2>
<p>Modern smartphones contain access to your bank accounts, emails, UPI apps, and entire digital identity. Acting fast can prevent substantial damage.</p>

<h2>Step 1 — Try to Locate It</h2>
<ul>
  <li><strong>Android:</strong> Go to android.com/find on any computer or device. Sign in to your Google account.</li>
  <li><strong>iPhone:</strong> Go to icloud.com/find or use another Apple device.</li>
  <li>If nearby, you can make it ring even if on silent</li>
  <li>If you suspect theft, use "Lock" — don't try to retrieve it yourself</li>
</ul>

<h2>Step 2 — Block Your SIM</h2>
<ul>
  <li>Call your telecom provider (Airtel: 121, Jio: 198, Vi: 199) to report the SIM stolen</li>
  <li>Ask for a SIM block immediately — this prevents OTP interception</li>
  <li>You can get a replacement SIM with the same number at any store with ID proof</li>
</ul>

<div class="danger-box">
  <strong>Critical:</strong> Until your SIM is blocked, a thief can receive OTPs and access your bank accounts, email, and UPI. This is your most urgent step.
</div>

<h2>Step 3 — Sign Out of All Accounts</h2>
<ul>
  <li>Google Account: myaccount.google.com → Security → Your Devices → Sign out</li>
  <li>Apple ID: appleid.apple.com → Sign out remote device</li>
  <li>Change passwords for: email, banking apps, UPI apps, social media</li>
</ul>

<h2>Step 4 — Block UPI & Banking</h2>
<ul>
  <li>Call your bank to disable net banking and UPI linked to that number</li>
  <li>Log into your UPI apps from another device and deactivate the old device</li>
</ul>

<h2>Step 5 — Remote Wipe (Last Resort)</h2>
<p>If you're certain it's stolen and can't be recovered, use "Erase Device" in Find My Device/iCloud. This permanently erases all data. Only do this as a last resort.</p>

<h2>Step 6 — File a Police Report</h2>
<ul>
  <li>Get an FIR or NCR (Non-Cognizable Report) from your local police station</li>
  <li>You'll need the IMEI number — find it on your phone's original box or at imei.info</li>
  <li>The IMEI can be used to blacklist the phone and prevent it from being resold</li>
</ul>

<h2>Step 7 — Report the IMEI to CEIR</h2>
<ul>
  <li>India's Central Equipment Identity Register (ceir.gov.in) can block stolen phones nationwide</li>
  <li>Submit the FIR number + IMEI to permanently disable the device on all networks</li>
</ul>
    `,
  },
  {
    slug: "lost-wallet-guide",
    category: "lost-items",
    title: "Lost Your Wallet: A Step-by-Step Recovery Guide",
    excerpt: "Your wallet contains your financial life. Here's exactly what to do when it goes missing — and how to prevent the worst outcomes.",
    readTime: "6 min read",
    difficulty: "Beginner",
    tags: ["Wallet", "Cards", "Cash"],
    updatedAt: "March 2025",
    content: `
<h2>Immediate Actions</h2>

<h3>Block All Cards First</h3>
<p>Before anything else, block every card in your wallet. This can be done in seconds via your banking app or helpline.</p>
<ul>
  <li>SBI: 1800-425-3800</li>
  <li>HDFC Bank: 1800-202-6161</li>
  <li>ICICI Bank: 1800-102-4242</li>
  <li>Axis Bank: 1800-419-5555</li>
  <li>Or log into each bank's app → Card → Block Card</li>
</ul>

<div class="tip-box">
  <strong>Save these numbers now:</strong> Add your bank's card-blocking helpline to your phone's contacts today, before you ever need it.
</div>

<h2>Document Replacement</h2>

<h3>Driving Licence</h3>
<ul>
  <li>File FIR at local police station</li>
  <li>Apply for duplicate at parivahan.gov.in or your RTO</li>
  <li>Documents needed: FIR copy, address proof, passport photo, application form</li>
</ul>

<h3>Aadhaar Card</h3>
<ul>
  <li>Reprint from myaadhaar.uidai.gov.in — costs ₹50</li>
  <li>Or lock your Aadhaar biometrics to prevent misuse: myaadhaar.uidai.gov.in/lock-unlock-biometrics</li>
</ul>

<h3>PAN Card</h3>
<ul>
  <li>Request reprint at NSDL (tin.tin.nsdl.com) or UTI portal — takes 5-7 days</li>
  <li>File an FIR mentioning PAN card loss to protect against misuse</li>
</ul>

<h3>Voter ID</h3>
<ul>
  <li>Apply for duplicate at voters.eci.gov.in</li>
  <li>Submit Form-002 along with the FIR copy</li>
</ul>

<h2>Monitoring for Fraud</h2>
<ul>
  <li>Check your CIBIL score after 30 days — identity thieves sometimes apply for loans</li>
  <li>Monitor your email and bank accounts for unusual activity for 3 months</li>
  <li>Consider placing a credit alert with CIBIL if you suspect your documents were misused</li>
</ul>
    `,
  },
  {
    slug: "lost-passport-guide",
    category: "lost-items",
    title: "Lost Passport: What to Do in India & Abroad",
    excerpt: "Losing your passport is serious — but recoverable. Follow this guide whether you're at home or stranded abroad.",
    readTime: "8 min read",
    difficulty: "Beginner",
    tags: ["Passport", "Documents", "Embassy"],
    updatedAt: "April 2025",
    content: `
<h2>If You've Lost Your Passport in India</h2>

<h3>Step 1 — File a Police Report</h3>
<ul>
  <li>Visit your local police station and file an FIR mentioning the passport number (if known), date and place of loss</li>
  <li>Collect the FIR — you'll need it for the re-issue application</li>
</ul>

<h3>Step 2 — Apply for Re-Issue</h3>
<ul>
  <li>Go to passportindia.gov.in and fill the online application form</li>
  <li>Select "Reissue of Passport" under reason "Lost/Damaged Passport"</li>
  <li>Book an appointment at your nearest Passport Seva Kendra</li>
</ul>

<h3>Documents Required</h3>
<ul>
  <li>Original FIR / Police Report</li>
  <li>Signed self-declaration of loss</li>
  <li>Address proof (Aadhaar, utility bill)</li>
  <li>Date of birth proof</li>
  <li>2 passport-size photos</li>
  <li>Old passport copy (if available)</li>
</ul>

<div class="tip-box">
  <strong>Processing time:</strong> Normal process takes 4-8 weeks. Tatkal (urgent) takes 1-3 weeks with an additional fee. If you have an upcoming booking, apply for Tatkal.
</div>

<h2>If You've Lost Your Passport Abroad</h2>

<h3>Step 1 — Contact the Indian Embassy/Consulate</h3>
<p>Locate your nearest Indian Embassy at mea.gov.in. They operate 24/7 emergency helplines for stranded citizens.</p>
<ul>
  <li>MEA Emergency Helpline: +91-11-2301-4104</li>
  <li>Or the host country's Indian Embassy number (listed on mea.gov.in)</li>
</ul>

<h3>Step 2 — File a Local Police Report</h3>
<p>Required even abroad — the embassy will need this to issue an Emergency Certificate.</p>

<h3>Step 3 — Get an Emergency Certificate (EC)</h3>
<ul>
  <li>An EC is a one-time travel document that lets you return to India</li>
  <li>Issued by the Indian Embassy after verifying your identity</li>
  <li>Bring: passport photos, police report, any available ID, proof of Indian citizenship</li>
</ul>

<div class="warning-box">
  <strong>Visa implications:</strong> Inform the host country's immigration about the lost passport. In some countries you may need to apply for a new visa or get the old visa transferred after your passport is reissued.
</div>
    `,
  },
  {
    slug: "lost-aadhaar-pan-guide",
    category: "lost-items",
    title: "Lost Your Aadhaar or PAN? Here's What to Do",
    excerpt: "These two documents are the backbone of your financial identity in India. Here's how to get them back and prevent misuse.",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: ["Aadhaar", "PAN", "Identity"],
    updatedAt: "March 2025",
    content: `
<h2>Lost Aadhaar Card</h2>

<h3>Download an e-Aadhaar (Free)</h3>
<p>The easiest solution — download and print a new copy within minutes.</p>
<ul>
  <li>Visit myaadhaar.uidai.gov.in</li>
  <li>Select "Download Aadhaar"</li>
  <li>Enter your 12-digit Aadhaar number and captcha</li>
  <li>Verify with OTP sent to your registered mobile</li>
  <li>Download the password-protected PDF (password is your name in capital letters + birth year)</li>
</ul>

<div class="tip-box">
  <strong>Don't remember your Aadhaar number?</strong> Use "Retrieve Lost UID" on the UIDAI website using your registered email/mobile.
</div>

<h3>Lock Your Aadhaar Biometrics</h3>
<p>If you suspect misuse, immediately lock your biometrics so no one can misuse your fingerprints for authentication.</p>
<ul>
  <li>Visit myaadhaar.uidai.gov.in → Lock/Unlock Biometrics</li>
  <li>Verify via OTP on your registered mobile</li>
  <li>You can unlock anytime when you need to use biometrics</li>
</ul>

<h2>Lost PAN Card</h2>

<h3>Apply for a Reprint</h3>
<ul>
  <li>Via NSDL: tin.tin.nsdl.com/pantan/StatusTrack.html (select "Reprint PAN Card")</li>
  <li>Via UTI: utiitsl.com → PAN Card Services → Reprint</li>
  <li>Cost: approximately ₹110 (Indian address) or ₹959 (foreign address)</li>
  <li>Delivery takes 15-20 business days</li>
</ul>

<h3>Protect Against Misuse</h3>
<ul>
  <li>File an FIR mentioning PAN loss — keeps you protected if someone tries to use it fraudulently</li>
  <li>Monitor your Form 26AS on the Income Tax portal for any unknown transactions</li>
  <li>Check your CIBIL score after a month for any unexpected loan applications</li>
</ul>

<div class="warning-box">
  <strong>PAN misuse:</strong> If your PAN is misused to file a fake tax return, respond immediately by contacting the Income Tax helpline at 1800-180-1961 and raising a complaint via the e-filing portal at incometax.gov.in.
</div>
    `,
  },

  // ONLINE SAFETY
  {
    slug: "password-security-guide",
    category: "online-safety",
    title: "Password Security: The Complete Modern Guide",
    excerpt: "Weak passwords are the #1 cause of account breaches. Here's how to create unbreakable passwords and manage them smartly.",
    readTime: "7 min read",
    difficulty: "Beginner",
    tags: ["Passwords", "Password Manager", "2FA"],
    updatedAt: "April 2025",
    content: `
<h2>Why Passwords Get Compromised</h2>
<p>The most common ways accounts get hacked are: reusing the same password across sites, using simple/guessable passwords, and falling for phishing attacks. Not sophisticated hacking.</p>

<h2>What Makes a Strong Password</h2>
<ul>
  <li>At least 12 characters long (16+ is ideal)</li>
  <li>Mix of uppercase, lowercase, numbers, and symbols</li>
  <li>Not based on personal information (name, birthday, city)</li>
  <li>Not a dictionary word or common phrase</li>
  <li>Unique — not used on any other account</li>
</ul>

<div class="tip-box">
  <strong>Easy strong password technique:</strong> Take a sentence you'll remember: "My cat Mango loves to sleep at 3am!" → McMl2sl@3am! — 12 characters, easy to remember, hard to crack.
</div>

<h2>Use a Password Manager</h2>
<p>The best practice is to use a password manager — it generates and stores unique complex passwords for every site. You only need to remember one master password.</p>
<ul>
  <li><strong>Free options:</strong> Bitwarden (open source), KeePass</li>
  <li><strong>Paid options:</strong> 1Password, Dashlane</li>
  <li><strong>Built-in:</strong> Google Password Manager, Apple Keychain (good for most users)</li>
</ul>

<h2>Two-Factor Authentication (2FA)</h2>
<p>Enable 2FA on every important account. Even if your password is stolen, the attacker still can't log in without your second factor.</p>
<ul>
  <li>Priority accounts for 2FA: email, banking, UPI, social media, government portals</li>
  <li>Authenticator apps (Google Authenticator, Authy) are safer than SMS 2FA</li>
  <li>Never share 2FA codes with anyone</li>
</ul>

<h2>Check if You've Been Breached</h2>
<ul>
  <li>Visit haveibeenpwned.com — enter your email to see if it appears in known data breaches</li>
  <li>If breached, change that password immediately on every site where you use it</li>
</ul>
    `,
  },
  {
    slug: "social-media-safety",
    category: "online-safety",
    title: "Social Media Safety: Protecting Your Privacy & Identity",
    excerpt: "Oversharing on social media fuels identity theft, scams, and account takeovers. Here's how to use it safely.",
    readTime: "6 min read",
    difficulty: "Beginner",
    tags: ["Instagram", "Facebook", "Privacy", "Scams"],
    updatedAt: "April 2025",
    content: `
<h2>What Scammers Mine From Your Social Media</h2>
<ul>
  <li>Your full name, date of birth, and city — for phishing personalization</li>
  <li>Your travel plans — for home robbery planning</li>
  <li>Your family members' names — for "family emergency" scams</li>
  <li>Your phone number — for SIM swap attacks</li>
  <li>Selfies with documents — for identity fraud</li>
</ul>

<h2>Privacy Settings to Change Today</h2>

<h3>Instagram</h3>
<ul>
  <li>Settings → Privacy → Account Privacy → Private Account</li>
  <li>Settings → Privacy → Activity Status → Turn off</li>
  <li>Remove your phone number from your public profile</li>
</ul>

<h3>Facebook</h3>
<ul>
  <li>Settings → Privacy → Who can see your friends list → Only Me</li>
  <li>Settings → Privacy → Who can look you up → Friends</li>
  <li>Remove date of birth from public view</li>
</ul>

<div class="warning-box">
  <strong>Never post:</strong> Photos of your ID/passport/Aadhaar, boarding passes (contain booking reference data), photos of new credit/debit cards, or your home address.
</div>

<h2>Spotting Fake Profiles & Scammers</h2>
<ul>
  <li>Generic attractive profile photos (run a reverse image search with Google Images)</li>
  <li>Account created recently with few followers/friends</li>
  <li>Messaging you out of the blue with "investment opportunities"</li>
  <li>Fake celebrity accounts asking for money or gift cards</li>
</ul>

<h2>Account Security</h2>
<ul>
  <li>Enable 2FA on all social media accounts</li>
  <li>Use a unique password for each platform</li>
  <li>Check active sessions regularly and log out of unfamiliar devices</li>
  <li>Be cautious with "Login with Facebook/Google" on third-party apps</li>
</ul>
    `,
  },
  {
    slug: "email-phishing-guide",
    category: "online-safety",
    title: "How to Spot & Avoid Email Phishing Attacks",
    excerpt: "Phishing emails are the most common way cybercriminals steal credentials. Learn to identify them instantly.",
    readTime: "5 min read",
    difficulty: "Beginner",
    tags: ["Email", "Phishing", "Cybersecurity"],
    updatedAt: "March 2025",
    content: `
<h2>What is Email Phishing?</h2>
<p>Phishing emails are carefully crafted messages that impersonate trusted organisations — your bank, the income tax department, IRCTC, Amazon, or even the CEO of your company — to trick you into clicking a malicious link or giving up credentials.</p>

<h2>The Anatomy of a Phishing Email</h2>
<ul>
  <li><strong>Sender:</strong> Looks official but the actual email domain is different (e.g., support@sbi-india-verify.com instead of sbi.co.in)</li>
  <li><strong>Subject:</strong> Creates urgency — "Your account will be closed," "Immediate action required," "You've won ₹50,000"</li>
  <li><strong>Link:</strong> Hover over links to see the real URL — they never match the displayed text</li>
  <li><strong>Attachment:</strong> .exe, .zip, or even .pdf files that install malware</li>
</ul>

<div class="tip-box">
  <strong>One-second check:</strong> Before clicking any link in an email, hover over it (on desktop) or long-press it (on mobile) to see the actual URL. If it looks suspicious, don't click.
</div>

<h2>Advanced Phishing Tactics</h2>

<h3>Spear Phishing</h3>
<p>Targeted attacks using your name, company, and personal details scraped from social media. Far more convincing than generic phishing.</p>

<h3>Whaling</h3>
<p>Targeting senior executives — scammers impersonate the CEO and ask finance teams to urgently wire money.</p>

<h2>Protecting Yourself</h2>
<ul>
  <li>Never enter credentials on a page you reached via an email link — go directly to the site</li>
  <li>Use Gmail or Outlook — they have strong phishing filters</li>
  <li>Enable 2FA so stolen passwords alone aren't enough</li>
  <li>Report phishing to Google (Gmail → three dots → Report phishing) to protect others</li>
</ul>

<div class="danger-box">
  <strong>If you clicked a suspicious link:</strong> Disconnect from the internet, run a virus scan, change the passwords of any accounts you accessed since clicking, and inform your IT department if it's a work device.
</div>
    `,
  },
  {
    slug: "public-wifi-safety",
    category: "online-safety",
    title: "Public Wi-Fi Safety: What You Need to Know",
    excerpt: "Free airport and café Wi-Fi can expose your data to hackers. Here's how to stay safe — or when to avoid it entirely.",
    readTime: "4 min read",
    difficulty: "Beginner",
    tags: ["Wi-Fi", "VPN", "Public Network"],
    updatedAt: "February 2025",
    content: `
<h2>The Real Risks of Public Wi-Fi</h2>
<p>On unsecured public networks, a skilled attacker on the same network can potentially intercept your unencrypted data — this is called a "man-in-the-middle" attack. They can also create fake Wi-Fi hotspots with legitimate-sounding names ("Airport_Free_WiFi") to capture your traffic.</p>

<h2>What's Safe on Public Wi-Fi</h2>
<ul>
  <li>Reading news, Wikipedia, or general browsing (HTTPS sites)</li>
  <li>Watching YouTube, streaming services</li>
  <li>Using apps with end-to-end encryption (WhatsApp messages, Signal)</li>
</ul>

<h2>What to NEVER Do on Public Wi-Fi</h2>
<ul>
  <li>Banking, net banking, UPI transactions</li>
  <li>Logging into email or social media without a VPN</li>
  <li>Shopping with card details</li>
  <li>Accessing work systems or sensitive documents</li>
</ul>

<div class="tip-box">
  <strong>Use mobile data instead:</strong> For anything sensitive, switch off Wi-Fi and use your mobile data (4G/5G). It's encrypted end-to-end by default and far more secure than public Wi-Fi.
</div>

<h2>How a VPN Helps</h2>
<p>A VPN (Virtual Private Network) encrypts all your internet traffic so that even on a compromised network, an attacker can only see encrypted gibberish. If you frequently use public Wi-Fi, a VPN is worth the small monthly cost.</p>
<ul>
  <li>Reputable VPNs: ProtonVPN, Mullvad, NordVPN, ExpressVPN</li>
  <li>Avoid "free" VPNs — they often monetise your browsing data</li>
  <li>A VPN is not a silver bullet — still avoid banking on public Wi-Fi even with one</li>
</ul>
    `,
  },
];

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.category === categorySlug);
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
