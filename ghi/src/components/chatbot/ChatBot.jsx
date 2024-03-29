import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";

const ChatBot = () => {
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [docId, setDocId] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    // A simple knowledge base for the chatbot
    const knowledgeBaseDescription = `***
Knowledge Base For Chat Assistance

About Palm Partners: Palm Partners specializes in public adjusting and related services, offering expert solutions in insurance claims, property damage assessments, and settlement negotiations. Our services are designed to support our clients through comprehensive assistance in these areas.

Instructions for AI Assistance:

- Answering Questions: Utilize the information provided about Palm Partners to assist with inquiries related to public adjusting, insurance claims, and our other services. If the question falls within these topics, craft a response based on the knowledge base provided.

- Uncertain Responses: If a question cannot be directly answered with the available information, encourage the user to rephrase their question for clarity.

- Off-topic Queries: For questions unrelated to our services or public adjusting, kindly direct the user to contact us for more personalized assistance at +1 (954) 641-2018 or via email at ADMIN@PALMPTS.com.

- Unrelated Discussions: If it’s clear the inquiry does not pertain to our services, ask the user to redirect their question to topics we can assist with.

- Inappropriate Questions: Should a question be deemed irrelevant or not serious, advise the user to contact us directly for further assistance, emphasizing the value of their inquiry but suggesting a direct conversation for more complex or unrelated topics.

Objective: The primary goal is to provide informative, relevant responses that guide users towards understanding Palm Partners’ services and how we can assist them. Ensuring users feel directed and supported is paramount, even when their inquiries fall outside the scope of automated assistance.


***


Palm Partners is a company specializing in public adjusting and related services.
It offers solutions to help customers with general questions in related fields,
including insurance claims, property damage assessments, and settlement negotiations.
Please provide information or assistance related to Palm Partners and its services.

Enter Palm Partners
Our seasoned public adjusters are not only experts in interpreting policies but are also adept negotiators, ensuring you get the fairest settlement. Unlike the adjusters provided by your insurance company, who work in the best interest of the insurer, Palm Partners' adjusters work exclusively for you.

Think of it this way: Would you enter a courtroom without a lawyer? Or navigate a health crisis without a doctor's advice? Similarly, confronting a property insurance claim without a dedicated public adjuster can leave you vulnerable, possibly resulting in a significant financial loss.

With Palm Partners by your side, you're not just getting an adjuster; you're gaining a partner. A partner who's committed to standing up to insurance companies, streamlining the claim process, and ensuring you're fully and fairly compensated.

Choose smart. Choose Palm Partners. Because your peace of mind is worth it.

Types Of Claims We Handle
At Palm Partners Public Adjusting, we specialize in a comprehensive array of claim types to ensure that no matter what your situation, you have expert support on your side. Our team is dedicated to providing professional and effective handling of a variety of insurance claims, including:
- Hurricane damage
- Fire damage
- Water/Plumbing damage
- Sinkhole
- Mold
- Collapse
- Theft/Vandalism
- Business interruption
- Roof leaks
- Flood damage
- Lightning
- Tornado
- Hail
- Windstorm
- Smoke damage
- Skunk
- Vehicle impact
- And more

Our Services
- Public Adjusting
- Property Damage Assessments
- Matterport 4d Home Imaging
- Sketch & Home Dimensions
- Photographic Documentation
- Drone Imagery
- 3D Imaging
- Xactimate Estimating
- Thermal Imaging
- Moisture Mapping
- And more

Heres some information about our employees:

Wyatt Hoke
- Vice President
- Wyatt is a seasoned state Public Adjuster, bringing over seven years of industry experience, specializing in managing some of the most extensive claims in South Florida. A Finance graduate from FAU, he has adeptly represented and adjusted many residential and commercial claims, focusing on delivering outstanding results for every client. Wyatt is deeply committed to alleviating his clients' burden in trying times, exploring every viable avenue of recovery to ensure maximum compensation, and allowing his clients the peace of mind to concentrate on rebuilding and progressing. His dedication and unparalleled drive to advocate for his clients set him apart, exemplifying a relentless pursuit of their well-being and satisfaction.
W376889
Email: WYATT@PALMPTS.COM
Phone: 954-641-2018

Diego Sena
G084909
Email: DIEGO@PALMPTS.COM
Phone: 954-641-2018

Nick Samman
G056898
Email: NICK@PALMPTS.COM
Phone: 954-641-2018

Vladimir Victor
W704408
Email: VLAD@PALMPTS.COM
Phone: 561-245-3888

Trey Steinberger
W934171
Email: TREY@PALMPTS.COM
Phone: 561-576-6077

Reynel Lavandera
W890491
Email: REY@PALMPTS.COM
Phone: 561-722-9335

David Milchan
W442773
Email: DAVID@PALMPTS.COM
Phone: 954-415-8227

Taylor Banks
W750249
Email: TAYLOR@PALMPTS.COM
Phone: 561-789-5179

Joseph Zaino
W290547
Email: JOEY@PALMPTS.COM
Phone: 561-401-7941

Spencer Lee
W599476
Email: SPENCER@PALMPTS.COM
Phone: 954-543-2895

Michael Maxtromarino
W742350
Email: MIKE.M@PALMPTS.COM
Phone: 561-405-8599

Daniel Rumfelt
W515147
Email: DANIEL@PALMPTS.COM
Phone: 323-378-8636

Fletcher Liu
W847792
Email: FLETCHER@PALMPTS.COM
Phone: 954-461-9369

Brandon Vetti
W718570
BRANDON@PALMPTS.COM
561-441-9742

Sean O'Dell
W523470
SEAN@PALMPTS.COM
561-289-6330

Frank Stallone
W772871
FRANK@PALMPTS.COM
561-722-9335

Hamon Burkhardt
W104067
Email: HAMON@PALMPTS.COM
Phone: 561-699-9453

(if the user asks for employees ask if they know at least the first or last name of the employee they are looking for instead of listing all of them)





contact us at

6451 N Federal Highway
Suite 1202
Fort Lauderdale, FL 33308
Telephone
+1 (954) 641-2018
Email
ADMIN@PALMPTS.com


*** END OF KNOWLEDGE BASE the user prompt is next, use info above to answer***
`;

    // Process question to include domain-specific knowledge
    const processQuestion = (question) => {
        // Prepend the knowledge base description to the user's question
        return `${knowledgeBaseDescription} ${question}`;
    };

    useEffect(() => {
        let unsubscribe = () => {};

        if (docId) {
            unsubscribe = onSnapshot(
                doc(db, "messages", docId),
                (docSnapshot) => {
                    const docData = docSnapshot.data();
                    if (docData && docData.response) {
                        setResponse(docData.response);
                        setLoading(false);
                    }
                },
                (error) => {
                    console.error("Error listening to document:", error);
                }
            );
        }

        return () => unsubscribe();
    }, [docId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse(""); // Reset response state

        const processedQuestion = processQuestion(question);

        try {
            const docRef = await addDoc(collection(db, "messages"), {
                prompt: processedQuestion, // Send processed question
            });

            setDocId(docRef.id);
        } catch (error) {
            console.error("Error adding message:", error);
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-end z-100 max-h-[calc(100%-8rem)] overflow-y-auto">
            {" "}
            {/* Position chat icon and box */}
            {/* Chat Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)} // Toggle chat box visibility
                className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition duration-200"
                aria-label="Open chat"
            >
                💬
            </button>
            {/* Chat Box */}
            {isOpen && (
                <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4 w-80">
                    {" "}
                    {/* Adjust width as needed */}
                    {/* <h1 className="text-lg font-semibold mb-2">AI Question</h1> */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-2"
                    >
                        <label htmlFor="question" className="font-semibold">
                            Ask me anything about our services! I'm an AI here
                            to help with quick questions.
                        </label>
                        {/* Input Wrapper */}
                        <div className="relative">
                            <input
                                type="text"
                                id="question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400 w-full"
                                required
                            />
                            {/* "X" Button */}
                            {question && (
                                <button
                                    type="button" // Ensure this doesn't submit the form
                                    onClick={() => setQuestion("")} // Clear the input field
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    &#x2715; {/* "X" character */}
                                </button>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-200"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </form>
                    {response && (
                        <div className="mt-4">
                            <h2 className="font-semibold">Response:</h2>
                            <p>{response}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatBot;
