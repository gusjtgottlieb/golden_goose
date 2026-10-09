// Microsoft AI-901 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/microsoft-ai-901.json.
module.exports = {
  id: "microsoft-ai-901",
  idPrefix: "ai901",
  vendor: "Microsoft",
  code: "AI-901",
  name: "Microsoft Certified: Azure AI Fundamentals",
  fullLength: 50,
  minutes: 45,
  passPercent: 70,
  readinessPercent: 80,
  sectioned: false,
  note: "Microsoft scores AI-901 on a 1–1000 scale with 700 to pass. This practice exam reports a straight percentage; treat 80% as your readiness bar. Questions follow the skills measured as of April 15, 2026. Foundry features and SDKs change quickly, so check current names and code on Microsoft Learn.",
  domains: [{"id":"CON","name":"Identify AI concepts and capabilities","weight":"40–45%"},{"id":"FDY","name":"Implement AI solutions by using Microsoft Foundry","weight":"55–60%"}],
  Q: [
{d:"CON",s:`A loan-approval model approves applicants from one ethnic group at a much lower rate than equally qualified applicants from other groups. Which responsible AI principle is most at risk?`,
o:[`Fairness`,`Inclusiveness`,`Transparency`,`Reliability and safety`],
a:[0],
e:`Fairness means AI systems should treat all people fairly and avoid allocating opportunities, resources, or information differently to similar people. Biased approval rates are a classic fairness problem, often caused by biased training data.`},

{d:"CON",s:`Which practice best helps an AI team address fairness?`,
o:[`Comparing results across demographic groups`,`Encrypting the training data while it's at rest`,`Publishing the model's source code on GitHub`,`Adding more GPUs to reduce response latency`],
a:[0],
e:`Checking whether error rates and outcomes differ across groups reveals unfair behavior so it can be mitigated, for example by rebalancing training data. Encryption supports privacy, and publishing code or adding compute doesn't address bias.`},

{d:"CON",s:`An AI system that helps diagnose medical images must perform consistently and fail safely when it encounters unusual inputs. Which principle does this describe?`,
o:[`Reliability and safety`,`Accountability`,`Inclusiveness`,`Privacy and security`],
a:[0],
e:`Reliability and safety means AI systems should perform as intended, respond safely to unanticipated conditions, and resist harmful manipulation. Rigorous testing, monitoring, and human review of edge cases support it.`},

{d:"CON",s:`Before releasing a generative AI chatbot, a team tests it against adversarial prompts designed to make it produce harmful content. Which principle does this testing primarily support?`,
o:[`Reliability and safety`,`Transparency`,`Fairness`,`Privacy and security`],
a:[0],
e:`Red-teaming with adversarial prompts checks that the system behaves safely under misuse, which is part of reliability and safety. Content filters and guardrails help mitigate the risks it uncovers.`},

{d:"CON",s:`A company's AI solution processes customer conversations. Which consideration falls under the privacy and security principle?`,
o:[`Protecting personal data and access to it`,`Making sure the model performs equally well for all users`,`Explaining to users how the model reaches its conclusions`,`Designing the app to work with screen readers`],
a:[0],
e:`Privacy and security covers protecting personal and business data, respecting consent and data-use rules, and securing the system against misuse. Equal performance is fairness, explanation is transparency, and accessibility is inclusiveness.`},

{d:"CON",s:`Which technique supports privacy when training or evaluating AI models on customer data?`,
o:[`Removing or masking personal information first`,`Increasing the model's temperature setting`,`Training on more data from the same customers`,`Publishing the full dataset for outside review`],
a:[0],
e:`Detecting and redacting personally identifiable information (PII) before data is used reduces privacy risk. Azure Language PII detection can help with this. Temperature affects randomness, and publishing data would harm privacy.`},

{d:"CON",s:`A speech-enabled app is designed so that people with speech impairments, strong accents, or limited mobility can all use it effectively. Which principle does this reflect?`,
o:[`Inclusiveness`,`Accountability`,`Transparency`,`Reliability and safety`],
a:[0],
e:`Inclusiveness means AI systems should empower and engage everyone, including people with disabilities, by considering a wide range of users and abilities during design.`},

{d:"CON",s:`Which design choice best supports inclusiveness?`,
o:[`Involving people with diverse abilities in testing`,`Restricting the app to users of a single language`,`Logging every request for later audit and review`,`Choosing the model with the highest benchmark score`],
a:[0],
e:`Inclusive design involves a diverse range of people, including people with disabilities, in design and testing so the system works for them. Auditing supports accountability, and benchmark scores don't measure inclusiveness.`},

{d:"CON",s:`Users of an AI hiring tool are told that AI is involved, what data it uses, and what its limitations are. Which principle does this support?`,
o:[`Transparency`,`Fairness`,`Inclusiveness`,`Privacy and security`],
a:[0],
e:`Transparency means people should understand how and why an AI system is used and its capabilities and limitations. Disclosing AI involvement and documenting intended uses, such as in a transparency note, supports it.`},

{d:"CON",s:`Microsoft publishes documents describing each AI service's intended uses, capabilities, and limitations. Which principle do these documents mainly support?`,
o:[`Transparency`,`Accountability`,`Fairness`,`Inclusiveness`],
a:[0],
e:`Transparency notes help customers understand how a service works, what it's designed for, and where it may fall short, so they can deploy it responsibly.`},

{d:"CON",s:`An organization assigns a review board to approve high-risk AI deployments and remain answerable for their outcomes. Which principle does this reflect?`,
o:[`Accountability`,`Transparency`,`Inclusiveness`,`Privacy and security`],
a:[0],
e:`Accountability means the people who design and deploy AI systems are responsible for how they operate. Governance structures such as review boards, policies, and human oversight put that responsibility into practice.`},

{d:"CON",s:`Which statement reflects the accountability principle?`,
o:[`The people deploying it stay responsible for its outcomes`,`The model's training data must be shared with all of its users`,`The AI system must give identical results to every user`,`The AI system should work for people of all abilities`],
a:[0],
e:`Under accountability, humans stay responsible for AI systems and their impact, with oversight and the ability to intervene. Results that work for everyone relate to fairness and inclusiveness.`},

{d:"CON",s:`How does a large language model generate a response?`,
o:[`It repeatedly predicts the next token from learned patterns`,`It looks up a stored answer for each question in a large database`,`It runs a search engine query and returns the top-ranked web page`,`It follows hand-written rules that developers created for each topic`],
a:[0],
e:`A large language model is trained on vast amounts of text to learn statistical relationships between tokens. At inference time, it generates output one token at a time, each time predicting a likely next token given everything before it.`},

{d:"CON",s:`What is a token in the context of a language model?`,
o:[`A unit of text, such as a word or word part`,`A password that authenticates calls to the model`,`A full sentence that the model has memorized`,`A single training example in the dataset`],
a:[0],
e:`Models split text into tokens — whole words, parts of words, or punctuation — and process and bill by token count. An API key or access token for authentication is a different meaning of the word.`},

{d:"CON",s:`What are embeddings?`,
o:[`Vectors of numbers that represent meaning`,`Images that a model inserts into its generated text responses`,`Hidden instructions added to every prompt by the service`,`Compressed copies of the training data stored in the model`],
a:[0],
e:`Embeddings map text (or other content) to vectors in a multidimensional space where semantically similar items are close together. They power semantic search and retrieval-augmented generation.`},

{d:"CON",s:`Which part of the transformer architecture lets a model weigh how much each token in the input relates to the others?`,
o:[`The attention layer`,`The tokenizer`,`The output layer`,`The loss function`],
a:[0],
e:`Attention lets the model consider relationships between all tokens in the context, so meaning is interpreted in context — for example, which noun a pronoun refers to. The tokenizer only splits text into tokens.`},

{d:"CON",s:`What is a model's context window?`,
o:[`The most tokens it can handle in one request, including output`,`The time limit for a single request before the model stops responding`,`The browser window where users chat with the deployed model`,`The range of dates covered by the model's training data`],
a:[0],
e:`The context window limits how many tokens — system message, conversation history, retrieved data, and the response — fit in a single call. Longer conversations may need summarizing or trimming to fit.`},

{d:"CON",s:`A generative AI app sometimes states incorrect facts confidently. What is this behavior called?`,
o:[`Hallucination`,`Overfitting`,`Tokenization`,`Quantization`],
a:[0],
e:`Hallucination is when a model produces fluent but false or unsupported content. Grounding responses in trusted data, such as with retrieval-augmented generation, and instructing the model to say when it doesn't know help reduce it.`},

{d:"CON",s:`What does retrieval-augmented generation (RAG) do?`,
o:[`Adds retrieved data to the prompt to ground answers`,`Retrains the model on new data every time a user asks a question`,`Compresses the model so it can run on a mobile device offline`,`Generates synthetic training data to make the model larger`],
a:[0],
e:`RAG retrieves relevant content, often by vector search over embeddings, and includes it in the prompt so the model answers from that data. It doesn't change the model's weights, unlike fine-tuning.`},

{d:"CON",s:`When is fine-tuning a better choice than prompt engineering or RAG?`,
o:[`When you need a consistent style that prompts can't achieve`,`When the model needs facts that change daily, such as prices`,`When you want to avoid preparing any training examples at all`,`When you need answers to cite the source documents they used`],
a:[0],
e:`Fine-tuning further trains a model on examples to teach a consistent format, tone, or specialized behavior. For frequently changing facts or citations, RAG is better, since it uses current data at query time. Fine-tuning requires prepared training data.`},

{d:"CON",s:`A team needs a model that can solve multi-step math and logic problems, and a slower response is acceptable. Which type of model fits best?`,
o:[`A reasoning model`,`An embedding model`,`An image-generation model`,`A speech synthesis model`],
a:[0],
e:`Reasoning models spend extra computation working through problems step by step before answering, which improves results on complex math, logic, and planning tasks at the cost of latency and tokens.`},

{d:"CON",s:`An app must run a language model on low-cost hardware with fast responses for simple tasks. Which type of model is most appropriate?`,
o:[`A small language model, such as Phi`,`The largest available frontier model`,`An image-generation model`,`An embedding model`],
a:[0],
e:`Small language models such as Microsoft's Phi family trade some capability for lower cost, lower latency, and the ability to run on modest or local hardware — a good fit for simpler, well-scoped tasks.`},

{d:"CON",s:`Which kind of model should you choose to answer questions about a photo that a user uploads?`,
o:[`A multimodal vision model`,`A text-only small language model`,`A text embedding model`,`A text-to-speech model`],
a:[0],
e:`Multimodal models, such as GPT-4o and later GPT models, accept images along with text in the prompt and can describe or reason about them. Text-only, embedding, and speech models can't interpret the image.`},

{d:"CON",s:`Where in Microsoft Foundry can you compare models by quality, cost, and throughput before choosing one?`,
o:[`The model catalog's leaderboards`,`The Azure Cost Management budgets page`,`The Content Understanding analyzer list`,`The resource group's activity log`],
a:[0],
e:`The Foundry model catalog includes benchmark and leaderboard views that compare models on quality, safety, cost, and performance, plus model cards describing capabilities. Budgets and activity logs don't compare models.`},

{d:"CON",s:`What does the temperature parameter control?`,
o:[`How random the output is`,`The maximum length of the response`,`How many past messages are included`,`Which model version handles the request`],
a:[0],
e:`Lower temperature makes outputs more focused and deterministic, while higher temperature makes them more varied and creative. Response length is set by a maximum-token setting, and history depends on what your app sends.`},

{d:"CON",s:`A chatbot's answers keep getting cut off midway through. Which parameter should you check first?`,
o:[`The max tokens setting`,`The temperature setting`,`The top-p setting`,`The frequency penalty setting`],
a:[0],
e:`The maximum output tokens setting caps response length, so a low value truncates answers. Temperature and top-p affect randomness, and frequency penalty discourages repeated tokens.`},

{d:"CON",s:`An organization needs high, predictable throughput for a model deployment with reserved capacity. Which deployment type fits?`,
o:[`A provisioned throughput deployment`,`A standard pay-per-token deployment`,`A batch deployment for offline jobs`,`A local deployment on one laptop`],
a:[0],
e:`Provisioned deployments reserve model processing capacity (measured in provisioned throughput units) for consistent latency and throughput. Standard deployments are pay-per-token, and batch deployments process large asynchronous jobs at lower cost.`},

{d:"CON",s:`A company must keep data processing for its model deployment within the EU while still benefiting from Microsoft's capacity across multiple EU regions. Which deployment type fits?`,
o:[`A Data Zone deployment`,`A Global deployment`,`A batch deployment`,`A developer deployment`],
a:[0],
e:`Data Zone deployments route traffic across regions within a defined geography, such as the EU or US, balancing data-residency requirements with available capacity. Global deployments can process data in any Azure region.`},

{d:"CON",s:`An app automatically writes first drafts of marketing emails from a short description. Which AI workload is this?`,
o:[`Generative AI`,`Speech recognition`,`Anomaly detection`,`Optical character recognition`],
a:[0],
e:`Generative AI creates new content — text, images, code, or audio — from a prompt. The other workloads analyze existing input rather than producing new content.`},

{d:"CON",s:`What distinguishes an AI agent from a simple chatbot?`,
o:[`It can plan and act using tools to complete tasks`,`It can only respond with prewritten text answers`,`It never uses a large language model to respond`,`It runs only on a user's device, without the cloud`],
a:[0],
e:`Agents combine a model with instructions and tools — such as search, code execution, or APIs — so they can reason about a goal, take actions, and use the results. A simple chatbot only generates replies.`},

{d:"CON",s:`A support system automatically reads customer reviews and labels each as positive, negative, or neutral. Which workload is this?`,
o:[`Text analysis`,`Speech synthesis`,`Image generation`,`Object detection`],
a:[0],
e:`Determining the opinion expressed in text is sentiment analysis, a text analysis (natural language processing) workload.`},

{d:"CON",s:`A system converts recorded phone calls into searchable transcripts. Which workload is this?`,
o:[`Speech recognition`,`Speech synthesis`,`Computer vision`,`Image generation`],
a:[0],
e:`Speech recognition (speech to text) converts spoken audio into text. Speech synthesis does the reverse, turning text into spoken audio.`},

{d:"CON",s:`A warehouse camera system counts packages on a conveyor belt and locates each one in the frame. Which workload is this?`,
o:[`Computer vision`,`Text analysis`,`Speech recognition`,`Generative AI`],
a:[0],
e:`Computer vision interprets images and video. Locating and counting items with bounding boxes is object detection, a computer vision task.`},

{d:"CON",s:`An insurer needs to pull policy numbers, claim amounts, and dates from thousands of submitted forms into a database. Which workload is this?`,
o:[`Information extraction`,`Image generation`,`Text-to-speech synthesis`,`Sentiment analysis`],
a:[0],
e:`Information extraction turns unstructured content, such as forms, documents, images, audio, or video, into structured fields that systems can use. Azure Content Understanding in Foundry Tools is designed for this.`},

{d:"CON",s:`Which text analysis technique identifies the main talking points in a document, such as "battery life" and "screen quality"?`,
o:[`Key phrase extraction`,`Language detection`,`Sentiment analysis`,`Speech synthesis`],
a:[0],
e:`Key phrase extraction returns the important phrases in text, summarizing what it's about. Language detection identifies the language, and sentiment analysis measures opinion.`},

{d:"CON",s:`Which technique identifies people, places, organizations, and dates mentioned in text?`,
o:[`Entity recognition`,`Key phrase extraction`,`Sentiment analysis`,`Language detection`],
a:[0],
e:`Named entity recognition (NER) finds references to entities and classifies them into categories such as person, location, organization, and date/time. Entity linking can also connect them to a knowledge base.`},

{d:"CON",s:`What does sentiment analysis return for a piece of text?`,
o:[`Positive, negative, neutral, or mixed opinion`,`A list of the people and places that are mentioned`,`The language the text is written in, with a confidence`,`A shorter version that covers the main points`],
a:[0],
e:`Sentiment analysis labels text positive, negative, neutral, or mixed, with confidence scores, at the document and sentence level. Opinion mining can go further, tying sentiment to specific aspects such as "service" or "price".`},

{d:"CON",s:`What is the difference between extractive and abstractive summarization?`,
o:[`Extractive selects sentences; abstractive writes new ones`,`Extractive writes new sentences; abstractive picks key sentences`,`Extractive works on audio; abstractive works only on text`,`They're the same technique under two different names`],
a:[0],
e:`Extractive summarization selects the most important sentences from the original text. Abstractive summarization generates new text that conveys the main ideas, which is how generative models usually summarize.`},

{d:"CON",s:`A company must find and redact Social Security numbers and phone numbers in support tickets. Which capability fits?`,
o:[`PII detection`,`Key phrase extraction`,`Language detection`,`Sentiment analysis`],
a:[0],
e:`PII detection identifies personally identifiable information, such as phone numbers, email addresses, and government IDs, and can return redacted text.`},

{d:"CON",s:`A global help desk needs to route incoming messages to agents who speak the same language as the customer. Which technique fits first?`,
o:[`Language detection`,`Entity recognition`,`Key phrase extraction`,`Summarization`],
a:[0],
e:`Language detection identifies the language of the text, along with a confidence score, so the message can be routed correctly or translated.`},

{d:"CON",s:`What does speech synthesis do?`,
o:[`Converts text into spoken audio`,`Converts spoken audio into text`,`Identifies who is speaking in audio`,`Translates text between written languages`],
a:[0],
e:`Speech synthesis (text to speech) generates spoken audio from text, typically using natural-sounding neural voices. Speech recognition converts audio into text.`},

{d:"CON",s:`An app needs to control the pronunciation, speaking rate, and pauses of synthesized speech. What should it use?`,
o:[`Speech Synthesis Markup Language (SSML)`,`A higher temperature for the speech model`,`A custom keyword list for recognition`,`Speaker diarization in the transcript`],
a:[0],
e:`SSML is an XML-based markup that controls how text is spoken, including voice, pitch, rate, pauses, and pronunciation. Diarization and keyword lists relate to speech recognition.`},

{d:"CON",s:`A meeting transcription service must label which participant said each sentence. Which speech capability provides this?`,
o:[`Speaker diarization`,`Speech synthesis`,`Keyword spotting`,`Language detection`],
a:[0],
e:`Diarization separates speakers in audio so the transcript shows who spoke when, such as "Speaker 1" and "Speaker 2".`},

{d:"CON",s:`A traveler speaks English into an app, and the app outputs the same sentence as spoken Spanish. Which capability is this?`,
o:[`Speech translation`,`Speaker diarization`,`Key phrase extraction`,`Custom neural voice`],
a:[0],
e:`Speech translation recognizes speech in one language and translates it into text or synthesized speech in another language.`},

{d:"CON",s:`Which speech recognition setting improves accuracy for product names and industry terms that the base model often gets wrong?`,
o:[`A phrase list or custom speech model`,`A higher speaking rate in SSML`,`A different neural voice for output`,`Speaker diarization for the audio`],
a:[0],
e:`Phrase lists give the recognizer hints about specific words, and custom speech models trained on your data handle specialized vocabulary or acoustic conditions. SSML and voices affect synthesis, not recognition.`},

{d:"CON",s:`Which computer vision task returns a sentence describing what's happening in an image?`,
o:[`Image captioning`,`Object detection`,`Optical character recognition`,`Image classification`],
a:[0],
e:`Captioning generates a human-readable description of an image. Object detection locates objects with bounding boxes, OCR reads text, and classification assigns a label to the whole image.`},

{d:"CON",s:`What's the difference between image classification and object detection?`,
o:[`Classification labels the image; detection locates objects`,`Classification locates each object; detection labels the whole image`,`Classification reads text; detection describes the overall scene`,`They're the same task with different output formats`],
a:[0],
e:`Image classification predicts what the image as a whole contains. Object detection identifies individual objects and returns a bounding box for each, so it can count and locate them.`},

{d:"CON",s:`Which capability reads printed and handwritten text from photos of signs and documents?`,
o:[`Text recognition (OCR)`,`Dense image captioning`,`Image generation`,`Speaker diarization`],
a:[0],
e:`OCR extracts text from images, including printed and handwritten text. Captioning describes the scene but doesn't transcribe the text exactly.`},

{d:"CON",s:`A design team wants to create original product illustrations from text descriptions. Which kind of model fits?`,
o:[`An image-generation model`,`An object detection model`,`An OCR model`,`An embedding model`],
a:[0],
e:`Image-generation models, such as GPT-image models available in Foundry, create new images from text prompts, and some can edit existing images. The other models analyze images rather than create them.`},

{d:"CON",s:`Why do services that analyze faces restrict some capabilities, such as identification, to approved customers?`,
o:[`To reduce misuse, such as unwanted surveillance`,`Because face analysis models can't run in the cloud`,`Because those features need special camera hardware`,`To lower the cost of running the face models for everyone`],
a:[0],
e:`Microsoft limits access to sensitive facial recognition features under its responsible AI commitments, because they can be misused for surveillance or to harm privacy. Customers must apply and meet use-case requirements.`},

{d:"CON",s:`A company wants structured data from invoices, product photos, recorded support calls, and training videos using one service. Which Foundry tool fits?`,
o:[`Azure Content Understanding`,`Azure Speech in Foundry Tools`,`Azure Translator in Foundry Tools`,`Azure AI Search`],
a:[0],
e:`Content Understanding processes documents, images, audio, and video, extracting content and schema-defined fields from each. Speech and Translator handle single modalities, and AI Search indexes content for retrieval.`},

{d:"CON",s:`An organization wants a summary and the main topics from each hour-long recorded webinar. Which workload covers this?`,
o:[`Extracting information from video and audio`,`Generating new images from text prompts`,`Detecting the language of short messages`,`Synthesizing speech from written scripts`],
a:[0],
e:`Information extraction from audio and video transcribes speech, analyzes visual content, and can generate fields such as summaries, topics, or scene descriptions — something Content Understanding supports.`},

{d:"CON",s:`Which technique converts a scanned paper form into structured key-value pairs, such as "Name: Jane Doe"?`,
o:[`Field extraction`,`Image captioning`,`Speech recognition`,`Sentiment analysis`],
a:[0],
e:`Document field extraction combines OCR and layout analysis with models that find the values for defined fields, returning structured key-value data rather than plain text.`},

{d:"FDY",s:`What is the purpose of the system message (instructions) in a chat app?`,
o:[`To set the model's role, behavior, and limits`,`To store the user's previous questions for the next session`,`To choose which model deployment handles each request`,`To authenticate the app with the Foundry project`],
a:[0],
e:`The system message, or instructions, tells the model who it is, how to respond, and what to avoid — for example, "You're a support assistant for Contoso. Answer only questions about Contoso products." User messages carry each request.`},

{d:"FDY",s:`A prompt includes three sample customer emails, each followed by the ideal one-line category. What is this technique called?`,
o:[`Few-shot prompting`,`Fine-tuning`,`Zero-shot prompting`,`Retrieval augmentation`],
a:[0],
e:`Few-shot prompting includes example inputs and desired outputs in the prompt so the model follows the pattern. Zero-shot gives no examples, and fine-tuning changes the model through training.`},

{d:"FDY",s:`A chatbot answers questions from a provided policy document but sometimes invents details. Which instruction is most likely to help?`,
o:[`"Use only the provided document; say if it isn't there."`,`"Be as creative and detailed as you can in every answer."`,`"Answer quickly, using as few words as possible."`,`"Use your general knowledge to fill in any missing details."`],
a:[0],
e:`Telling the model to rely only on the supplied context and to admit when it doesn't know reduces ungrounded answers. Encouraging creativity or general knowledge makes invented details more likely.`},

{d:"FDY",s:`An app needs the model's output in a consistent JSON format that code can parse. What should the prompt do?`,
o:[`Specify the exact JSON structure, with an example`,`Ask the model to respond in any format it prefers`,`Raise the temperature so the output varies more`,`Remove the system message so the model isn't constrained`],
a:[0],
e:`Spelling out the required fields and format, with an example, makes output predictable. Many models also support structured outputs that enforce a JSON schema. Higher temperature makes output less consistent.`},

{d:"FDY",s:`A complex request produces muddled answers. Which prompt technique often improves results?`,
o:[`Breaking the task into clear, ordered steps`,`Shortening the prompt to a single word`,`Repeating the same request several times`,`Removing all the context about the task`],
a:[0],
e:`Splitting a complex task into explicit steps, or asking the model to work through it step by step, helps it handle each part. Removing context or repeating requests doesn't add clarity.`},

{d:"FDY",s:`Which user prompt is most likely to produce a useful result?`,
o:[`"Summarize this in three bullets for executives."`,`"Tell me something about this report, whatever you like."`,`"Report?"`,`"Make this report better somehow, in any way you want."`],
a:[0],
e:`Effective prompts are specific about the task, format, length, and audience. Vague prompts leave the model guessing about what you want.`},

{d:"FDY",s:`Why does a chat app send earlier messages, or a conversation ID, with each new request?`,
o:[`The model itself doesn't remember earlier requests`,`The service charges less for longer requests`,`The model needs them to authenticate the user`,`Each message must be sent twice to be accepted`],
a:[0],
e:`Models are stateless between calls, so context must be supplied each time — either by resending history or by referencing a conversation the service stores. That's how follow-up questions like "And what's its capital?" make sense.`},

{d:"FDY",s:`What do you typically need to do before your app can call a model from your Foundry project?`,
o:[`Deploy it and call it by its deployment name`,`Download the model's weights to the app's server`,`Fine-tune the model on your own company data`,`Register the model in Microsoft Entra ID as a user`],
a:[0],
e:`You deploy a model from the catalog to your Foundry resource, giving the deployment a name, and your code references that name. Downloading weights and fine-tuning aren't required to use a model.`},

{d:"FDY",s:`Where can you chat with a deployed model and adjust its instructions and parameters without writing code?`,
o:[`The playground in the Foundry portal`,`The Azure Monitor metrics explorer`,`The Azure Cost Management view`,`The resource's access control page`],
a:[0],
e:`The Foundry portal's playground lets you try a deployment, edit instructions, and tune parameters such as temperature, and it can show sample code for the same request.`},

{d:"FDY",s:`You deployed gpt-5-mini under the deployment name "support-model". In your code, what value goes in the model parameter?`,
o:[`"support-model"`,`"gpt-5-mini"`,`The Foundry resource name`,`The project's subscription ID`],
a:[0],
e:`Requests reference the deployment name you chose. If you deployed a model under a different name than the model itself, use that deployment name in code.`},

{d:"FDY",s:`What do guardrails, such as content filters, on a Foundry model deployment do?`,
o:[`Detect and block harmful prompts and outputs`,`Limit how many tokens each user can send per day`,`Encrypt the prompts while they're stored at rest`,`Translate prompts into English before processing`],
a:[0],
e:`Guardrails classify inputs and outputs for categories such as hate, violence, sexual content, and self-harm, and can detect jailbreak attempts, blocking or annotating content based on configured severity thresholds.`},

{d:"FDY",s:`Before releasing an app, a team wants to measure the groundedness, relevance, and safety of its responses on a test dataset. What should it use in Foundry?`,
o:[`Evaluations with built-in evaluators`,`The model catalog's pricing page`,`A higher maximum token setting`,`Azure Advisor recommendations`],
a:[0],
e:`Foundry evaluations run your app or model against test data and score outputs with evaluators for quality (such as groundedness, relevance, and coherence) and for safety risks.`},

{d:"FDY",s:`Which Python package provides the AIProjectClient class for working with a Foundry project?`,
o:[`azure-ai-projects`,`azure-ai-textanalytics`,`azure-cognitiveservices-speech`,`azure-storage-blob`],
a:[0],
e:`The azure-ai-projects package (the Foundry SDK) provides AIProjectClient. Text analytics, Speech, and Blob Storage have their own packages.`},

{d:"FDY",s:`Which endpoint format does AIProjectClient use?`,
o:[`https://<resource>.services.ai.azure.com/api/projects/<project>`,`https://<resource>.blob.core.windows.net/<container>`,`https://login.microsoftonline.com/<tenant-id>`,`https://<region>.api.cognitive.microsoft.com/sts/v1.0`],
a:[0],
e:`A Foundry project endpoint has the form https://<resource-name>.services.ai.azure.com/api/projects/<project-name>, shown on the project's overview page.`},

{d:"FDY",s:`A developer signed in with az login. Which credential should the app pass to AIProjectClient to use that sign-in, without storing keys?`,
o:[`DefaultAzureCredential`,`AzureKeyCredential`,`A hard-coded password`,`An anonymous credential`],
a:[0],
e:`DefaultAzureCredential, from azure-identity, tries several sources in turn — environment variables, managed identity, and developer sign-ins such as the Azure CLI — so the same code works locally and in Azure without keys in code.`},

{d:"FDY",s:`After creating an AIProjectClient named project, how do you get a client for calling a deployed model?`,
o:[`project.get_openai_client()`,`project.connect_model()`,`project.deployments.open()`,`project.models.login()`],
a:[0],
e:`get_openai_client() returns an OpenAI-compatible client that's already configured for the project, so you can call APIs such as responses.create.`},

{d:"FDY",s:`Which call sends a prompt to a deployed model and returns a response with an output_text property?`,
o:[`openai.responses.create(model=..., input=...)`,`openai.models.retrieve(input=...)`,`openai.files.upload(model=..., input=...)`,`openai.embeddings.list(model=...)`],
a:[0],
e:`The Responses API call responses.create takes the deployment name and input, and the returned response exposes the generated text as output_text.`},

{d:"FDY",s:`How can a Foundry SDK client keep context across multiple turns without resending the whole history itself?`,
o:[`Create a conversation and pass its ID each time`,`Raise the max tokens so the model remembers more`,`Create a new AIProjectClient for every message`,`Store the history in the system message manually`],
a:[0],
e:`openai.conversations.create() creates a conversation, and passing conversation=conversation.id to responses.create lets the service keep the history, so follow-up questions have context.`},

{d:"FDY",s:`Which components define a basic agent in Foundry Agent Service?`,
o:[`A model, instructions, and optional tools`,`A database, a web server, and a firewall`,`A training dataset and a fine-tuning job`,`A speech voice, a language, and a region`],
a:[0],
e:`An agent combines a deployed model with instructions that define its behavior, plus tools that let it retrieve knowledge or take actions.`},

{d:"FDY",s:`An agent must answer questions using the company's uploaded HR policy PDFs. Which tool should you add?`,
o:[`File search`,`Code interpreter`,`Image generation`,`Speech synthesis`],
a:[0],
e:`File search indexes uploaded files into a vector store so the agent can retrieve relevant passages and ground its answers in them.`},

{d:"FDY",s:`An agent must analyze an uploaded CSV file and produce a chart of monthly sales. Which tool should you add?`,
o:[`Code interpreter`,`File search`,`Web search`,`Speech synthesis`],
a:[0],
e:`Code interpreter lets the agent write and run Python in a sandbox to analyze data, do calculations, and create files such as charts.`},

{d:"FDY",s:`An agent must look up live order status in the company's own REST API. Which kind of tool fits?`,
o:[`An OpenAPI or function-calling tool`,`File search over uploaded files`,`Code interpreter with sample data`,`A larger context window setting`],
a:[0],
e:`OpenAPI tools and function calling let an agent call external APIs or your own code with structured arguments, so it can fetch live data or take actions. Uploaded files would be out of date.`},

{d:"FDY",s:`An agent must answer questions about today's news. Which tool gives it current public information?`,
o:[`A web search grounding tool`,`Code interpreter`,`File search over old files`,`A lower temperature setting`],
a:[0],
e:`Web search grounding, such as Grounding with Bing Search, retrieves current public web results and lets the agent cite them. A model's built-in knowledge stops at its training cutoff.`},

{d:"FDY",s:`In the Foundry SDK for Python, which call creates an agent from a model and instructions?`,
o:[`project.agents.create_version() with a definition`,`project.deployments.create() with a ModelDeployment`,`project.connections.add() with an AgentConnection`,`project.evaluations.run() with an AgentEvaluator`],
a:[0],
e:`agents.create_version takes an agent name and a definition, such as PromptAgentDefinition(model=..., instructions=...), and returns the agent's name, ID, and version.`},

{d:"FDY",s:`How does a Python client send a message to an existing agent named "MyAgent"?`,
o:[`Call responses.create on a client bound to the agent`,`Open the agent's playground URL in a headless browser`,`Write the message to a storage queue the agent watches`,`Call the agent's model deployment with no instructions`],
a:[0],
e:`project.get_openai_client(agent_name="MyAgent") returns a client bound to that agent. Calling responses.create, optionally with a conversation ID, runs the agent with its instructions and tools.`},

{d:"FDY",s:`You call agents.create_version for an agent name that already exists. What happens?`,
o:[`A new version of that agent is created`,`The call fails because the name is taken`,`The existing agent is deleted permanently`,`A second agent with a numbered name appears`],
a:[0],
e:`Agents are versioned: creating a version for an existing name adds a new version with the updated definition, which keeps a history of changes.`},

{d:"FDY",s:`Which Python client calls Azure Language text analysis features such as sentiment and key phrases?`,
o:[`TextAnalyticsClient from azure-ai-textanalytics`,`SpeechRecognizer from azure-cognitiveservices-speech`,`ImageAnalysisClient from azure-ai-vision-imageanalysis`,`BlobServiceClient from azure-storage-blob`],
a:[0],
e:`The azure-ai-textanalytics package provides TextAnalyticsClient, with methods for sentiment, key phrases, entities, PII, language detection, and summarization.`},

{d:"FDY",s:`What do you need to create a TextAnalyticsClient?`,
o:[`Its endpoint plus a key or token`,`The model's training data and a GPU`,`A Foundry agent name and a conversation ID`,`An SSML document and a voice name`],
a:[0],
e:`Like other Foundry Tools clients, TextAnalyticsClient takes the resource's endpoint plus a credential — an AzureKeyCredential with a key, or a Microsoft Entra token credential.`},

{d:"FDY",s:`Which TextAnalyticsClient method returns positive, negative, neutral, or mixed labels for each document?`,
o:[`analyze_sentiment`,`extract_key_phrases`,`recognize_entities`,`detect_language`],
a:[0],
e:`analyze_sentiment returns a sentiment label and confidence scores for each document and its sentences.`},

{d:"FDY",s:`Which TextAnalyticsClient method identifies the language of each input document?`,
o:[`detect_language`,`analyze_sentiment`,`recognize_pii_entities`,`extract_key_phrases`],
a:[0],
e:`detect_language returns the primary language of each document, such as English or French, with an ISO code and confidence score.`},

{d:"FDY",s:`An app must return support tickets with phone numbers and email addresses masked. Which method's result includes redacted text?`,
o:[`recognize_pii_entities`,`recognize_entities`,`extract_key_phrases`,`analyze_sentiment`],
a:[0],
e:`recognize_pii_entities returns the PII entities found and a redacted_text version of each document with them masked.`},

{d:"FDY",s:`An app must accept a spoken question and answer it directly, without a separate speech-to-text step. What should it use?`,
o:[`A deployed multimodal model that accepts audio input`,`A text embedding model with a vector index`,`An image-generation model with a voice prompt`,`Azure Language key phrase extraction`],
a:[0],
e:`Audio-capable multimodal models, such as GPT-4o audio models, can take spoken input and respond in text or speech, so the app doesn't need to transcribe first.`},

{d:"FDY",s:`A voice assistant needs low-latency, back-and-forth spoken conversation that users can interrupt. Which option fits best?`,
o:[`A realtime audio model through the Realtime API`,`A batch deployment that processes audio overnight`,`An embedding model with a speech plugin`,`An image-generation model with audio output`],
a:[0],
e:`Realtime models, such as gpt-realtime, stream audio in and out over a persistent connection for natural, low-latency speech conversations. Batch processing is for offline jobs.`},

{d:"FDY",s:`How is a recorded audio clip typically included in a chat request to an audio-capable model?`,
o:[`As base64-encoded audio in the message`,`As a link to a public video sharing website`,`As SSML markup inside the system message`,`As a list of phonemes typed by the user`],
a:[0],
e:`Audio input is typically sent as an audio content part containing base64-encoded data and its format, such as WAV or MP3, alongside any text in the message.`},

{d:"FDY",s:`Which Python package provides the Azure Speech SDK?`,
o:[`azure-cognitiveservices-speech`,`azure-ai-textanalytics`,`azure-ai-projects`,`azure-ai-vision-imageanalysis`],
a:[0],
e:`The Speech SDK for Python is installed as azure-cognitiveservices-speech and is usually imported as azure.cognitiveservices.speech.`},

{d:"FDY",s:`In the Speech SDK, which object holds the key and region (or endpoint) plus settings such as the recognition language?`,
o:[`SpeechConfig`,`AudioConfig`,`SpeechRecognizer`,`ResultReason`],
a:[0],
e:`SpeechConfig holds the connection details and service settings, such as speech_recognition_language and speech_synthesis_voice_name. AudioConfig specifies the audio input or output, such as a microphone or file.`},

{d:"FDY",s:`Which Speech SDK class transcribes speech from a microphone or audio file?`,
o:[`SpeechRecognizer`,`SpeechSynthesizer`,`SpeechConfig`,`TextAnalyticsClient`],
a:[0],
e:`SpeechRecognizer performs speech to text using a SpeechConfig and an AudioConfig. SpeechSynthesizer performs text to speech.`},

{d:"FDY",s:`Which Speech SDK class converts text into spoken audio?`,
o:[`SpeechSynthesizer`,`SpeechRecognizer`,`TranslationRecognizer`,`AudioConfig`],
a:[0],
e:`SpeechSynthesizer generates audio from text with methods such as speak_text_async, or speak_ssml_async for SSML input, playing it to a speaker or writing it to a file.`},

{d:"FDY",s:`How do you choose which neural voice the Speech SDK uses for synthesis?`,
o:[`Set the voice name on the SpeechConfig`,`Pass the voice name as the recognition language`,`Upload a recording of the voice to the project`,`Choose the voice in Azure Monitor settings`],
a:[0],
e:`Setting speech_synthesis_voice_name, for example to "en-US-AvaMultilingualNeural", selects a prebuilt neural voice. SSML can also set the voice per request.`},

{d:"FDY",s:`After calling recognize_once_async().get(), how does the app confirm that speech was successfully transcribed?`,
o:[`Check that result.reason is RecognizedSpeech`,`Check that result.text equals the SSML input`,`Check that the HTTP status code returned is 404`,`Check that the audio file was deleted afterward`],
a:[0],
e:`The result's reason indicates the outcome: RecognizedSpeech means result.text holds the transcript, NoMatch means speech couldn't be recognized, and Canceled indicates an error.`},

{d:"FDY",s:`An app must transcribe a 30-minute recorded lecture. Which Speech SDK approach fits?`,
o:[`A continuous recognition call`,`A single recognize_once call`,`A SpeechSynthesizer call`,`A language detection call`],
a:[0],
e:`recognize_once returns after a single utterance, ending at a pause or after about 15 seconds. Continuous recognition processes speech until you stop it, raising events as phrases are recognized. Large batches of files can also use batch transcription.`},

{d:"FDY",s:`How do you include an image in a Responses API request to a multimodal model?`,
o:[`Add an input_image item with a URL or data`,`Put the image file name inside the system message text`,`Upload the image to the model catalog before the call`,`Set the temperature to a value above 1.0 for images`],
a:[0],
e:`The input can be a list of content items: an input_text item with the question and an input_image item whose image_url is a web URL or a base64 data URL.`},

{d:"FDY",s:`An app needs to send a local photo, which isn't on the web, to a multimodal model. How should it send the image?`,
o:[`As a base64-encoded data URL`,`As the photo's file path on disk`,`As a description typed by the user`,`As an attachment in an email`],
a:[0],
e:`The service can't read files on your machine, so the app reads the image, base64-encodes it, and sends it as a data URL such as data:image/jpeg;base64,....`},

{d:"FDY",s:`Which prompt is most likely to get usable data from a photo of a receipt sent to a multimodal model?`,
o:[`"Return the store name, date, and total as JSON."`,`"What do you think of this picture?"`,`"Describe the image in as much detail as possible."`,`"Is this a nice receipt?"`],
a:[0],
e:`Specific instructions about which fields to return and in what format make the output predictable and easy for code to use.`},

{d:"FDY",s:`A multimodal model is used to read part numbers from photos of equipment labels. What's a sensible safeguard?`,
o:[`Validate critical values, since models can misread details`,`Assume every value is correct because the model is multimodal`,`Lower the image resolution so the model reads it faster`,`Remove the instructions so the model can decide what to do`],
a:[0],
e:`Multimodal models can misread small or blurry text or miscount objects, so important values should be validated, for example with format checks or human review.`},

{d:"FDY",s:`Which model in the Foundry catalog generates images from text prompts?`,
o:[`gpt-image-1`,`text-embedding-3-large`,`whisper`,`Phi-4-mini`],
a:[0],
e:`GPT-image models generate and edit images from text prompts. text-embedding-3-large creates embeddings, Whisper transcribes speech, and Phi-4-mini is a small language model.`},

{d:"FDY",s:`What usually makes an image-generation prompt more effective?`,
o:[`Describing the subject, style, and lighting`,`Keeping the prompt to a single vague word`,`Asking the model to surprise you with anything`,`Repeating the same word many times`],
a:[0],
e:`Detailed prompts that describe what to show, the visual style, framing, and mood give the model clear direction and produce results closer to what you want.`},

{d:"FDY",s:`A team wants to replace the background of an existing product photo while keeping the product unchanged. What should it use?`,
o:[`An image edit request with the original image`,`A text embedding of the product description`,`An OCR call to read the product's label`,`A speech synthesis request describing it`],
a:[0],
e:`Image-generation models such as gpt-image-1 support edits: you supply the original image, a prompt describing the change, and optionally a mask marking the area to change.`},

{d:"FDY",s:`A user's image-generation request is rejected with a content policy error. What's the most likely cause?`,
o:[`The guardrails flagged the prompt as harmful`,`The deployment ran out of disk space for images`,`The prompt was written in a language other than English`,`The model needs fine-tuning before it can draw anything`],
a:[0],
e:`Guardrails screen image prompts and generated images for harmful content and block requests that violate policy. Prompts in many languages are supported.`},

{d:"FDY",s:`Which Python client analyzes images with Azure Vision in Foundry Tools to return captions, tags, objects, and text?`,
o:[`ImageAnalysisClient from azure-ai-vision-imageanalysis`,`TextAnalyticsClient from azure-ai-textanalytics`,`SpeechRecognizer from azure-cognitiveservices-speech`,`AIProjectClient from azure-ai-projects agents`],
a:[0],
e:`ImageAnalysisClient's analyze method takes an image and a list of visual features, such as CAPTION, TAGS, OBJECTS, and READ, and returns results for each.`},

{d:"FDY",s:`Which visual feature should you request from Image Analysis to extract printed and handwritten text?`,
o:[`READ`,`CAPTION`,`TAGS`,`SMART_CROPS`],
a:[0],
e:`The READ feature performs OCR, returning lines and words of text with their positions. CAPTION describes the scene, TAGS lists content keywords, and SMART_CROPS suggests thumbnail regions.`},

{d:"FDY",s:`Which visual feature returns bounding boxes for items such as cars and bicycles in an image?`,
o:[`OBJECTS`,`CAPTION`,`READ`,`TAGS`],
a:[0],
e:`OBJECTS performs object detection, returning each detected object's name, confidence, and bounding box. TAGS lists content keywords without locations.`},

{d:"FDY",s:`When might an app use Image Analysis rather than prompting a multimodal model?`,
o:[`When it needs fast, consistent tags, boxes, and text`,`When it needs an open-ended conversation about the image`,`When it needs to generate a brand-new image from text`,`When it needs to explain its reasoning in detail`],
a:[0],
e:`Image Analysis returns predictable, structured results for specific tasks at low latency. Multimodal models are more flexible for open-ended questions and reasoning about images.`},

{d:"FDY",s:`In Azure Content Understanding, what defines how content is processed and which fields are returned?`,
o:[`An analyzer`,`A guardrail`,`A vector index`,`A speech voice`],
a:[0],
e:`An analyzer configures content extraction settings, the field schema, and the model deployments to use, and applies them consistently to every file it processes. Content Understanding offers prebuilt analyzers and custom ones.`},

{d:"FDY",s:`A company needs fields that are specific to its own internal application form. What should it create in Content Understanding?`,
o:[`A custom analyzer with its own field schema`,`A new prebuilt analyzer from Microsoft`,`A speech-to-text model for the form`,`A separate Foundry resource per field`],
a:[0],
e:`Custom analyzers let you define your own fields, their types, descriptions, and methods. Prebuilt analyzers cover common scenarios such as invoices.`},

{d:"FDY",s:`A field must return the invoice date exactly as it's printed on the document. Which field method fits?`,
o:[`Extract`,`Generate`,`Classify`,`Summarize`],
a:[0],
e:`Extract returns values as they appear in the input content and is supported for documents. Generate creates values freely, such as summaries, and Classify chooses from predefined categories.`},

{d:"FDY",s:`A field should contain a short summary of each recorded support call. Which field method fits?`,
o:[`Generate`,`Extract`,`Classify`,`Redact`],
a:[0],
e:`Generate produces values from the input data that don't appear verbatim, such as summaries of audio conversations or scene descriptions of videos.`},

{d:"FDY",s:`A field must label each incoming document as "invoice", "receipt", or "contract". Which field method fits?`,
o:[`Classify`,`Extract`,`Generate`,`Translate`],
a:[0],
e:`Classify assigns a value from a predefined set of categories, such as document type or call sentiment. Classification can also route content to the right analyzer.`},

{d:"FDY",s:`An automated workflow must decide when an extracted value needs human review. Which Content Understanding outputs help most?`,
o:[`The confidence score and grounding for each field`,`The total number of pages in the input document`,`The name of the model deployment that was used`,`The time the analyzer was originally created`],
a:[0],
e:`Confidence scores (from 0 to 1) show how reliable each value is, and grounding shows where it came from in the source, so low-confidence values can be routed to a person who can check them quickly.`},

{d:"FDY",s:`A team is ingesting documents into a search index for retrieval-augmented generation and wants text that preserves headings and tables. Which output fits?`,
o:[`A Markdown version of the content`,`A single classification label`,`A synthesized audio file`,`A list of bounding boxes only`],
a:[0],
e:`Content Understanding can output document content as Markdown, keeping structure such as sections and tables, which suits search and RAG. Structured JSON fields suit automation.`},

{d:"FDY",s:`Which Content Understanding field method is supported for documents but not for images, audio, or video?`,
o:[`Extract`,`Generate`,`Classify`,`None; all are supported`],
a:[0],
e:`Extract, which returns values exactly as they appear, is supported only for documents. For images, audio, and video, fields use Generate or Classify.`},

{d:"FDY",s:`A retailer wants each product photo to return fields for product category and dominant color. How should it set up Content Understanding?`,
o:[`An image analyzer with classify or generate fields`,`A document analyzer with extract-only fields`,`A speech analyzer with a custom voice`,`A text analytics key phrase request`],
a:[0],
e:`An image analyzer with a field schema can classify the category from a fixed list and generate a description such as the dominant color.`},

{d:"FDY",s:`What does Content Understanding need to power field generation and figure analysis?`,
o:[`A set of your own Foundry model deployments`,`A separate Azure Machine Learning training cluster`,`A Speech resource in the same Azure region`,`An Azure AI Search index for every analyzer`],
a:[0],
e:`Content Understanding uses large language and embedding models that you deploy in Foundry, and you configure which deployments it uses. It doesn't require a training cluster or a search index.`},

{d:"FDY",s:`What does Content Understanding return for an audio file analyzed by an audio analyzer?`,
o:[`A transcript, plus any fields you defined`,`Only a waveform image of the recording`,`A cleaned-up audio file with noise removed`,`A neural voice trained on the speaker`],
a:[0],
e:`Audio analysis transcribes speech and then fills your schema, such as a summary, topics, or sentiment for a call.`},

{d:"FDY",s:`A video analyzer should return separate descriptions for each scene of a training video. Which capability supports this?`,
o:[`Segmentation`,`Speaker diarization`,`Language detection`,`Image editing`],
a:[0],
e:`Segmentation divides content into logical sections, such as video scenes or document types, so fields can be generated for each segment. It's enabled through the analyzer's segmentation setting.`},

{d:"FDY",s:`A call center wants every recorded call labeled with an overall sentiment from a fixed set of values. Which field method should the audio analyzer use?`,
o:[`Classify`,`Extract`,`Redact`,`Detect`],
a:[0],
e:`Classify picks a value from predefined categories, such as Positive, Neutral, or Negative, and works for audio. Extract applies only to documents.`},

{d:"FDY",s:`During content extraction for video, what does Content Understanding do?`,
o:[`Transcribes speech and finds key visual elements`,`Converts the video into a sequence of text prompts`,`Generates a new video based on the transcript`,`Compresses the video for faster streaming`],
a:[0],
e:`For audio and video, content extraction transcribes speech and identifies key visual elements, such as keyframes, before field extraction runs.`},

{d:"FDY",s:`How does a client app analyze a file with the Content Understanding REST API?`,
o:[`Call analyze on the analyzer, then poll for results`,`Upload the file to the model catalog and wait for an email`,`Send the file to the Foundry playground through a browser`,`Stream the file to a Speech recognizer and read the text`],
a:[0],
e:`Analysis is asynchronous: the app calls analyze for a specific analyzer ID, gets an operation location in the response, and polls it until the result is ready.`},

{d:"FDY",s:`Which Azure resource hosts Content Understanding?`,
o:[`A Microsoft Foundry resource`,`An Azure SQL Database server`,`An Azure Storage account`,`A Virtual Machine Scale Set`],
a:[0],
e:`Content Understanding is a Foundry Tool available as part of the Microsoft Foundry resource, and it uses model deployments in that resource.`},

{d:"FDY",s:`What does an analyze request specify so the service knows which schema and settings to apply?`,
o:[`The analyzer ID`,`The voice name`,`The temperature`,`The agent version`],
a:[0],
e:`Each analyze call targets an analyzer by its ID — a prebuilt analyzer or a custom one you created — which determines the extraction settings and fields.`},

{d:"FDY",s:`A mailroom app receives a mix of invoices, receipts, and contracts. How can Content Understanding route each to the right extraction?`,
o:[`Classify each document, then use the matching analyzer`,`Use one extract-only field for all three document types`,`Send every document to a speech analyzer first`,`Ask users to rename files before uploading them`],
a:[0],
e:`Classification categorizes documents (and can split multi-document files) and routes each to the analyzer for that type, so each gets the right fields.`},

{d:"FDY",s:`Which Content Understanding output suits an automation workflow that writes values into a database?`,
o:[`JSON that matches the field schema`,`Markdown with headings and tables preserved`,`An audio summary read by a neural voice`,`A thumbnail image of each document page`],
a:[0],
e:`Field extraction returns structured JSON aligned with your schema, with confidence and grounding, which code can map directly to database columns. Markdown suits search and RAG.`},
  ],
};
