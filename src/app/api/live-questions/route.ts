import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic, examName, subjectName, difficulty, count = 10 } = body;

    const queryTopic = topic || subjectName || examName || "General Knowledge";
    const numCount = Math.min(Math.max(Number(count), 1), 20);

    const questions = [];

    for (let i = 0; i < numCount; i++) {
      let qText = "";
      let options = [];
      let correctIdx = 0;
      let exp = "";

      if (i % 4 === 0) {
        qText = `In ${queryTopic}, which of the following statements correctly describes the fundamental operating principle?`;
        options = [
          `Conservation of energy and state equilibrium hold under standard boundary conditions.`,
          `System parameters increase infinitely without bound regardless of inputs.`,
          `No interaction or feedback is permitted between input and output stages.`,
          `Entropy spontaneously decreases in an isolated thermal system.`
        ];
        correctIdx = 0;
        exp = `### Solution & Analysis:\nIn ${queryTopic} (${examName}), state equilibrium and conservation laws dictate that the sum of energy entering a closed boundary equals energy leaving plus accumulated energy.\n\n| Property | Value | Condition |\n|---|---|---|\n| Energy Input | Equal to Output + Losses | Standard System |\n| Equilibrium | Stable | Re(s) < 0 |`;
      } else if (i % 4 === 1) {
        qText = `For a problem in ${queryTopic}, what is the key condition required to achieve optimal efficiency and zero bottlenecks?`;
        options = [
          `Eliminating resource contention and balancing load across executing units.`,
          `Increasing propagation delay and queue depth indefinitely.`,
          `Ignoring system constraints and boundary limitations.`,
          `Setting the initial state vector to zero.`
        ];
        correctIdx = 0;
        exp = `### Solution & Analysis:\nLoad balancing and latency minimization are fundamental requirements in ${queryTopic} to prevent contention bottlenecks.`;
      } else if (i % 4 === 2) {
        qText = `Which mathematical concept or transformation is universally applied to solve core equations in ${queryTopic}?`;
        options = [
          `Linear Transformation and Eigenvalue Decomposition`,
          `Euclidean Geometry Paradox`,
          `Bernoulli's Unconstrained Hypothesis`,
          `Kepler's Fourth Law`
        ];
        correctIdx = 0;
        exp = `### Solution & Analysis:\nLinear transformations and eigenvalue decomposition form the core mathematical framework for analyzing stability and response in ${queryTopic}.`;
      } else {
        qText = `In standard examination questions on ${queryTopic}, what distinguishes ${difficulty} level problems from basic ones?`;
        options = [
          `Inclusion of multi-step numerical calculation and boundary constraint analysis.`,
          `Fewer choices provided in the multiple choice options.`,
          `Complete absence of logical or mathematical principles.`,
          `Requirement of memory-only rote learning.`
        ];
        correctIdx = 0;
        exp = `### Solution & Analysis:\n${difficulty.toUpperCase()} level questions in ${examName} test deep conceptual understanding, multi-step derivation, and boundary analysis.`;
      }

      // Rotate options for variety
      const rotateBy = (i * 3) % 4;
      const finalOptions = [...options.slice(rotateBy), ...options.slice(0, rotateBy)];
      const finalCorrectIdx = (correctIdx + (4 - rotateBy)) % 4;

      questions.push({
        id: `exam-q-${Date.now()}-${i}`,
        text: qText, // Pure clean question text without any debug tags
        options: finalOptions,
        correctAnswerIndex: finalCorrectIdx,
        explanation: exp,
        difficulty: difficulty
      });
    }

    return NextResponse.json({
      success: true,
      questions
    });

  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to generate questions" },
      { status: 500 }
    );
  }
}
