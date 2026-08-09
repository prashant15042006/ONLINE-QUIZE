import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { questionText, options, correctAnswerIndex, userSelectedIndex, mode, subject, topic } = body;

    const correctOptionText = options ? options[correctAnswerIndex] : "Option " + (correctAnswerIndex + 1);
    const userOptionText = userSelectedIndex !== null && userSelectedIndex !== undefined && options ? options[userSelectedIndex] : null;

    let title = "AI Solution Insight";
    let content = "";
    let language = "English";

    switch (mode) {
      case "hindi":
        title = "हिंदी में स्पष्टीकरण (Hindi Explanation)";
        language = "Hindi";
        content = `### प्रश्न:\n${questionText}\n\n### सही उत्तर: **${correctOptionText}**\n\n### सरल हिंदी में समझें:\nइस अवधारणा (${topic || subject || "विषय"}) का मुख्य सिद्धांत यह है कि सही उत्तर (${correctOptionText}) सीधे नियम और सूत्र का पालन करता है। अन्य विकल्प गलत हैं क्योंकि वे सही गणितीय/तार्किक शर्त को पूरा नहीं करते हैं।`;
        break;

      case "hinglish":
        title = "Hinglish Explanation (आसान भाषा में)";
        language = "Hinglish";
        content = `### Question Overview:\n${questionText}\n\n### Correct Answer: **${correctOptionText}**\n\n### Simple Hinglish Explanation:\nIs question me **${topic || subject}** ka main concept use hua hai. \n- Correct Option (**${correctOptionText}**) standard formula & condition ko satisfies karta hai.\n- Baki options isliye wrong hain kyuki unme formula misuse ya incorrect calculation hai. Focus on core steps!`;
        break;

      case "simply":
        title = "Simple Everyday Explanation";
        content = `### Standard Concept Simplified:\nThink of **${topic || subject || "this concept"}** as a balance scale.\n\n- The correct choice (**${correctOptionText}**) maintains perfect equilibrium.\n- The core takeaway: Always verify boundary conditions and units before concluding!`;
        break;

      case "step_by_step":
        title = "Step-by-Step Mathematical Derivation";
        content = `### 1. Given Data:\n- Subject Domain: ${subject || "General"}\n- Topic Area: ${topic || "Core Concept"}\n\n### 2. Applied Formula:\n$$\\text{Condition} \\implies \\text{Equilibrium / Law satisfies } ${correctOptionText}$$\n\n### 3. Step Execution:\n- Step A: Identify known parameters\n- Step B: Substitute parameters into standard equation\n- Step C: Simplify result $\\implies$ Option (${String.fromCharCode(65 + correctAnswerIndex)}) **${correctOptionText}**`;
        break;

      case "real_life":
        title = "Real-World Practical Example";
        content = `### Real-Life Application:\nImagine you are designing a high-performance system for **${topic || subject || "real-world engineering"}**:\n\n- **Scenario**: Applying ${correctOptionText} prevents system overload and ensures smooth operation.\n- **Why it matters**: In industry, ignoring this principle causes latency bottlenecks or structural errors!`;
        break;

      case "why_wrong":
        title = "Why Was Your Answer Incorrect?";
        if (userOptionText) {
          content = `### Comparative Diagnosis:\n- **Your Choice**: ${userOptionText}\n- **Correct Choice**: ${correctOptionText}\n\n### Misconception Breakdown:\nYou likely selected **${userOptionText}** by assuming an unconstrained or ideal condition. However, in ${topic || subject}, the required constraint makes **${correctOptionText}** the only valid answer.`;
        } else {
          content = `### Question Analysis:\nThe correct answer is **${correctOptionText}**. Re-read the question carefully to spot key constraints!`;
        }
        break;

      default:
        content = `### Concept Breakdown (${topic || subject}):\nThe question tests your understanding of **${topic}**. The correct option is **${correctOptionText}**.`;
    }

    return NextResponse.json({
      success: true,
      mode,
      language,
      title,
      content,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "AI Explanation service error" },
      { status: 500 }
    );
  }
}
