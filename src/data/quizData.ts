export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export interface Branch {
  id: string;
  name: string;
  description: string;
  subjects: Subject[];
}

export interface Exam {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  branches?: Branch[];
  subjects?: Subject[];
}

// Helper to generate some standard sample questions if needed, but we will write solid actual questions for the selected branches.
const generateSampleQuestions = (subjectName: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  return [
    {
      id: `${subjectName}-${difficulty}-1`,
      text: `Which of the following is a key concepts/standard question in ${subjectName} (${difficulty} level)?`,
      options: [
        `Option A: Primary basic principle of ${subjectName}`,
        `Option B: Secondary alternative method`,
        `Option C: Advanced optimization technique`,
        `Option D: None of the above`
      ],
      correctAnswerIndex: 0,
      explanation: `In ${subjectName}, the correct approach is Option A because it directly corresponds to the fundamental theorem/formula governing this specific scenario at a ${difficulty} level.`,
      difficulty
    },
    {
      id: `${subjectName}-${difficulty}-2`,
      text: `For a standard problem in ${subjectName}, if we double the input parameter, what is the expected impact under ${difficulty} conditions?`,
      options: [
        "It remains completely unchanged",
        "It increases by a factor of two (linear relationship)",
        "It increases quadratically",
        "It decreases exponentially"
      ],
      correctAnswerIndex: 1,
      explanation: `Based on the governing linear differential equations or systems of ${subjectName}, doubling the input directly scales the output by the same factor of 2.`,
      difficulty
    },
    {
      id: `${subjectName}-${difficulty}-3`,
      text: `Which mathematical model is most widely used to simulate the transient behavior in ${subjectName}?`,
      options: [
        "Fourier Heat Transfer Model",
        "Euler-Lagrange equations",
        "Laplace Transform & Transfer Functions",
        "Monte Carlo Stochastic Simulation"
      ],
      correctAnswerIndex: 2,
      explanation: `Laplace Transform simplifies the differential equations of ${subjectName} into algebraic expressions, representing transient response dynamically through poles and zeros.`,
      difficulty
    }
  ];
};

export const EXAMS_DATA: Exam[] = [
  {
    id: "gate",
    name: "GATE",
    fullName: "Graduate Aptitude Test in Engineering",
    description: "National level exam for master programs (M.Tech/Ph.D) and PSU recruitment.",
    icon: "🎓",
    branches: [
      {
        id: "cs",
        name: "CS & IT",
        description: "Computer Science and Information Technology",
        subjects: [
          {
            id: "dbms",
            name: "Database Management Systems (DBMS)",
            description: "Relational model, ER model, SQL, Normalization, Transactions & Concurrency",
            questions: [
              {
                id: "gate-cs-dbms-easy-1",
                text: "What is the primary key requirement in a relational database table?",
                options: [
                  "It must be a foreign key in another table",
                  "It must be unique and cannot contain NULL values",
                  "It must be an integer data type",
                  "It must contain duplicate values for indexing"
                ],
                correctAnswerIndex: 1,
                explanation: "A primary key constraint uniquely identifies each record in a database table. Primary keys must contain unique values, and cannot contain NULL values.",
                difficulty: "easy"
              },
              {
                id: "gate-cs-dbms-medium-1",
                text: "Given a relation R(A, B, C, D, E) with functional dependencies: A -> B, B -> C, C -> D, D -> E. What is the candidate key for this relation?",
                options: [
                  "Candidate key is A",
                  "Candidate key is B",
                  "Candidate keys are A and B",
                  "No candidate key exists"
                ],
                correctAnswerIndex: 0,
                explanation: "Closure of A is A+ = {A, B, C, D, E}, which contains all attributes. So A is the candidate key.",
                difficulty: "medium"
              },
              {
                id: "gate-cs-dbms-hard-1",
                text: "Consider a relation R(A,B,C,D,E) with functional dependencies: AB -> C, C -> D, D -> B. Find the number of candidate keys for R.",
                options: [
                  "1 candidate key",
                  "2 candidate keys",
                  "3 candidate keys",
                  "4 candidate keys"
                ],
                correctAnswerIndex: 2,
                explanation: "The attributes that do not appear on the right-hand side of any functional dependency are A and E. Therefore, A and E must be present in every candidate key. Let's test combinations: (1) (ABE)+ = {A, B, E} -> {A, B, E, C} (since AB->C) -> {A, B, E, C, D} (since C->D). Hence ABE is a candidate key. (2) (ACE)+ = {A, C, E} -> {A, C, E, D} (since C->D) -> {A, C, E, D, B} (since D->B). Hence ACE is a candidate key. (3) (ADE)+ = {A, D, E} -> {A, D, E, B} (since D->B) -> {A, D, E, B, C} (since AB->C). Hence ADE is a candidate key. Thus, R has 3 candidate keys: ABE, ACE, and ADE.",
                difficulty: "hard"
              }
            ]
          },
          {
            id: "algorithms",
            name: "Algorithms & Data Structures",
            description: "Searching, sorting, graphs, dynamic programming, greedy algorithms, complexity",
            questions: [
              {
                id: "gate-cs-algo-easy-1",
                text: "What is the worst-case time complexity of Quick Sort when selecting the first element as the pivot?",
                options: [
                  "O(n log n)",
                  "O(n)",
                  "O(n^2)",
                  "O(log n)"
                ],
                correctAnswerIndex: 2,
                explanation: "In the worst case (e.g., when the array is already sorted or reverse sorted), Quick Sort partitioning repeatedly splits the array into one element and n-1 elements, resulting in a recurrence relation T(n) = T(n-1) + O(n), which solves to O(n^2).",
                difficulty: "easy"
              },
              {
                id: "gate-cs-algo-medium-1",
                text: "Which of the following traversal strategies on a Binary Search Tree (BST) visits the node values in ascending sorted order?",
                options: [
                  "Pre-order Traversal",
                  "Post-order Traversal",
                  "In-order Traversal",
                  "Level-order Traversal"
                ],
                correctAnswerIndex: 2,
                explanation: "In-order traversal visits the left subtree, then the root node, and finally the right subtree. For a BST, this guarantees that elements are visited in strictly increasing sorted order.",
                difficulty: "medium"
              },
              {
                id: "gate-cs-algo-hard-1",
                text: "What is the minimum number of scalar multiplications required to multiply a chain of matrices A1, A2, A3 with dimensions 10x20, 20x30, and 30x40 respectively?",
                options: [
                  "18,000",
                  "12,000",
                  "8,000",
                  "6,000"
                ],
                correctAnswerIndex: 0,
                explanation: "We have two ways to multiply A1(10x20), A2(20x30), A3(30x40): \n1) (A1 * A2) * A3: Cost of (A1 * A2) is 10*20*30 = 6,000. Result is 10x30. Multiplying with A3 costs 10*30*40 = 12,000. Total = 6,000 + 12,000 = 18,000. \n2) A1 * (A2 * A3): Cost of (A2 * A3) is 20*30*40 = 24,000. Result is 20x40. Multiplying with A1 costs 10*20*40 = 8,000. Total = 24,000 + 8,000 = 32,000. \nTherefore, the minimum number of multiplications is 18,000.",
                difficulty: "hard"
              }
            ]
          },
          {
            id: "toc",
            name: "Theory of Computation",
            description: "Regular languages, CFGs, Turing machines, decidability",
            questions: [
              {
                id: "gate-cs-toc-easy-1",
                text: "Which of the following is true for regular languages?",
                options: [
                  "They are closed under union and intersection, but not complementation",
                  "They are closed under union, intersection, and complementation",
                  "They can accept matched nested parentheses",
                  "They require infinite memory to parse"
                ],
                correctAnswerIndex: 1,
                explanation: "Regular languages are closed under all boolean operations (union, intersection, complementation, difference, Kleene closure). They are parsed by finite automata which have finite memory.",
                difficulty: "easy"
              }
            ]
          },
          {
            id: "os",
            name: "Operating Systems",
            description: "Processes, threads, CPU scheduling, synchronization, memory management",
            questions: [
              {
                id: "gate-cs-os-medium-1",
                text: "A system has 4 processes and 3 resources of the same type. Each process needs a maximum of 2 resources to complete. Can a deadlock occur in this system?",
                options: [
                  "Yes, deadlock will always occur",
                  "Yes, deadlock might occur under specific scheduling",
                  "No, deadlock can never occur",
                  "Insufficient information"
                ],
                correctAnswerIndex: 1,
                explanation: "For 'n' processes and 'm' resource instances of the same type, where each process requires at most 'k' resources, deadlock is impossible if: Total resources (m) >= sum of (max need of each process - 1) + 1. Here, sum of (2-1) for 4 processes is 4*1 = 4. Adding 1 gives 5. Since we only have 3 resources, wait, let's calculate: if each process gets 1 resource, they need 1 more. With 3 resources, we can give 3 processes 1 resource each. The 4th process gets 0. If any of the 3 processes wants another resource, they block. Since all resources are held and no one can finish, deadlock CAN occur. Thus, deadlock might occur under specific scheduling. Correct index is 1 (Yes, deadlock might occur under specific scheduling).",
                difficulty: "medium"
              }
            ]
          }
        ]
      },
      {
        id: "ece",
        name: "ECE",
        description: "Electronics and Communication Engineering",
        subjects: [
          {
            id: "networks",
            name: "Networks, Signals and Systems",
            description: "Network theorems, transient analysis, Laplace, Fourier, Z-transform",
            questions: generateSampleQuestions("Networks, Signals and Systems", "easy")
          },
          {
            id: "analog",
            name: "Analog Circuits",
            description: "Diode circuits, BJT/FET amplifiers, Op-amps, Oscillators",
            questions: generateSampleQuestions("Analog Circuits", "medium")
          }
        ]
      },
      {
        id: "me",
        name: "Mechanical Engineering",
        description: "Mechanical Design, Thermodynamics, Fluid Mechanics, Manufacturing",
        subjects: [
          {
            id: "thermo",
            name: "Thermodynamics",
            description: "Laws of thermodynamics, cycles, entropy, pure substances",
            questions: generateSampleQuestions("Thermodynamics", "easy")
          }
        ]
      },
      {
        id: "ce",
        name: "Civil Engineering",
        description: "Structures, Geotech, Transportation, Water Resources",
        subjects: [
          {
            id: "structures",
            name: "Structural Analysis",
            description: "Trusses, beams, frames, influence lines, matrix methods",
            questions: generateSampleQuestions("Structural Analysis", "medium")
          }
        ]
      },
      {
        id: "ee",
        name: "Electrical Engineering",
        description: "Power Systems, Electrical Machines, Control Systems, Power Electronics",
        subjects: [
          {
            id: "machines",
            name: "Electrical Machines",
            description: "Transformers, DC machines, Induction and Synchronous motors",
            questions: generateSampleQuestions("Electrical Machines", "easy")
          }
        ]
      },
      {
        id: "in",
        name: "Instrumentation Engineering",
        description: "Sensors, Industrial Instrumentation, Optical Measurement",
        subjects: [
          {
            id: "sensors",
            name: "Sensors & Transducers",
            description: "Resistive, capacitive, inductive, piezoelectric sensors",
            questions: generateSampleQuestions("Sensors & Transducers", "easy")
          }
        ]
      },
      {
        id: "ch",
        name: "Chemical Engineering",
        description: "Heat and Mass Transfer, Chemical Reaction Engineering",
        subjects: [
          {
            id: "cre",
            name: "Chemical Reaction Engineering",
            description: "Kinetics, reactor design, catalysis, non-ideal reactors",
            questions: generateSampleQuestions("Chemical Reaction Engineering", "medium")
          }
        ]
      },
      {
        id: "bt",
        name: "Biotechnology",
        description: "Recombinant DNA, Bioinformatics, Bioprocess Engineering",
        subjects: [
          {
            id: "rdna",
            name: "Recombinant DNA Technology",
            description: "Cloning vectors, PCR, gene libraries, sequencing",
            questions: generateSampleQuestions("Recombinant DNA Technology", "easy")
          }
        ]
      }
    ]
  },
  {
    id: "jee",
    name: "JEE",
    fullName: "Joint Entrance Examination",
    description: "National level exam for admission to premier engineering institutes like IITs, NITs.",
    icon: "🔬",
    subjects: [
      {
        id: "physics",
        name: "Physics",
        description: "Mechanics, Electrodynamics, Optics, Modern Physics",
        questions: [
          {
            id: "jee-phy-easy-1",
            text: "A particle is moving in a circular path of radius R. What is its displacement after completing half a revolution?",
            options: [
              "Zero",
              "πR",
              "2R",
              "2πR"
            ],
            correctAnswerIndex: 2,
            explanation: "Displacement is the shortest distance between initial and final points. For half a revolution on a circle of radius R, the particle moves from one end of the diameter to the other, so the displacement is the diameter, which is 2R.",
            difficulty: "easy"
          }
        ]
      },
      {
        id: "chemistry",
        name: "Chemistry",
        description: "Organic, Inorganic, Physical Chemistry",
        questions: [
          {
            id: "jee-chem-easy-1",
            text: "Which of the following compounds has a tetrahedral geometry?",
            options: [
              "CO2",
              "H2O",
              "CH4",
              "BF3"
            ],
            correctAnswerIndex: 2,
            explanation: "Methane (CH4) has sp3 hybridization with no lone pairs on carbon, resulting in a perfect tetrahedral geometry with bond angles of 109.5 degrees.",
            difficulty: "easy"
          }
        ]
      },
      {
        id: "maths",
        name: "Mathematics",
        description: "Calculus, Algebra, Coordinate Geometry, Vectors",
        questions: [
          {
            id: "jee-math-easy-1",
            text: "What is the value of limit as x approaches 0 for sin(x)/x?",
            options: [
              "0",
              "1",
              "Does not exist",
              "Infinity"
            ],
            correctAnswerIndex: 1,
            explanation: "Using L'Hopital's rule or standard trigonometric limits, limit (x->0) sin(x)/x = cos(0)/1 = 1.",
            difficulty: "easy"
          }
        ]
      }
    ]
  },
  {
    id: "neet",
    name: "NEET",
    fullName: "National Eligibility cum Entrance Test",
    description: "Single entrance test for medical aspirants seeking admission to MBBS/BDS courses.",
    icon: "🩺",
    subjects: [
      {
        id: "biology",
        name: "Biology",
        description: "Botany and Zoology, Cell structure, Plant & Human Physiology, Genetics",
        questions: [
          {
            id: "neet-bio-easy-1",
            text: "Which organelle is known as the powerhouse of the cell?",
            options: [
              "Ribosome",
              "Lysosome",
              "Mitochondria",
              "Golgi Apparatus"
            ],
            correctAnswerIndex: 2,
            explanation: "Mitochondria are responsible for generating adenosine triphosphate (ATP), the primary energy currency of the cell, through cellular respiration.",
            difficulty: "easy"
          }
        ]
      }
    ]
  },
  {
    id: "ssc",
    name: "SSC",
    fullName: "Staff Selection Commission",
    description: "Competitive exams for recruitment to government ministries and departments.",
    icon: "💼",
    subjects: [
      {
        id: "quant",
        name: "Quantitative Aptitude",
        description: "Arithmetic, Algebra, Geometry, Trigonometry, Data Interpretation",
        questions: [
          {
            id: "ssc-quant-easy-1",
            text: "If a shopkeeper sells an article at a discount of 20% on the marked price and still makes a profit of 12%, find the ratio of Cost Price to Marked Price.",
            options: [
              "5:7",
              "5:8",
              "2:3",
              "4:5"
            ],
            correctAnswerIndex: 0,
            explanation: "Let Marked Price (MP) = 100. Selling Price (SP) = 80. Since profit is 12%, SP = 1.12 * CP. So 80 = 1.12 * CP => CP = 80/1.12 = 8000/112 = 500/7. Ratio CP:MP = (500/7):100 = 500:700 = 5:7.",
            difficulty: "easy"
          }
        ]
      }
    ]
  },
  {
    id: "railway",
    name: "Railway (RRB)",
    fullName: "Railway Recruitment Board",
    description: "Recruitment exams for various positions in Indian Railways.",
    icon: "🚆",
    subjects: [
      {
        id: "rrb-reasoning",
        name: "General Intelligence & Reasoning",
        description: "Analogies, classification, series, coding-decoding, blood relations",
        questions: [
          {
            id: "rrb-reason-easy-1",
            text: "Identify the next term in the series: 2, 6, 12, 20, 30, ?",
            options: [
              "38",
              "40",
              "42",
              "46"
            ],
            correctAnswerIndex: 2,
            explanation: "The differences between consecutive terms are increasing consecutive even numbers: 6-2=4, 12-6=6, 20-12=8, 30-20=10. The next difference should be 12. So next term is 30 + 12 = 42.",
            difficulty: "easy"
          }
        ]
      }
    ]
  }
];
