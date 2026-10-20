import type { Question, Chapter } from "./quizData";

export const MADE_EASY_CN_TWT18_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-cn-twt18-q01",
    difficulty: "easy",
    concept: "Connection-Oriented vs Connectionless Protocols",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Which of the following is a connection-oriented protocol, i.e., it establishes a dedicated logical communication channel between two devices before transmitting data?`,
    options: [
      "IP",
      "TCP",
      "RIP",
      "DNS"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **TCP (Transmission Control Protocol):** A connection-oriented transport layer protocol that establishes a reliable logical connection using a **three-way handshake (SYN, SYN-ACK, ACK)** before data transfer begins.
- **IP:** Connectionless network layer protocol; each packet is routed independently.
- **RIP:** Routing protocol running over UDP (port 520), which is connectionless.
- **DNS:** Application protocol primarily running over UDP (port 53), which is connectionless.

**Correct Answer: Option 2 (TCP)**`
  },

  // ─── Q.2 (SCQ) ───
  {
    id: "me-cn-twt18-q02",
    difficulty: "easy",
    concept: "IPv4 Router Forwarding Actions",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider a router forwarding an IPv4 packet without fragmentation. Which of the following statements is/are correct?`,
    options: [
      "TTL is decreased and checksum is updated.",
      "Source IP address is modified to router’s IP.",
      "Protocol field is updated based on next hop.",
      "Header checksum remains unchanged."
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
When a standard router forwards an IPv4 datagram (without NAT or fragmentation):
1. **TTL (Time to Live):** Decremented by at least 1 at every forwarding hop.
2. **Header Checksum:** Because the TTL field changes, the 16-bit IPv4 header checksum must be recalculated and updated.
3. **Source/Destination IP addresses:** Retained unchanged end-to-end.
4. **Protocol field:** Specifies the higher-layer protocol (e.g., 6 for TCP, 17 for UDP) and is never modified by intermediate routers.

**Correct Answer: Option 1**`
  },

  // ─── Q.3 (NAT) ───
  {
    id: "me-cn-twt18-q03",
    difficulty: "medium",
    concept: "Classful Addressing & Directed Broadcast Address",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 28,
    natTolerance: 0,
    text: `Consider an IP address \`201.24.58.69\` in classful addressing. If the number of 1’s in its Directed Broadcast Address (DBA) is $a$ and the number of 1’s in its Network ID is $b$, the value of $a + b$ is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**1. Determine Address Class:**
First octet is $201$. Since $192 \\le 201 \\le 223$, this is a **Class C** address:
- Network ID: 24 bits
- Host ID: 8 bits

**2. Binary representation of octets:**
- $201 = 128 + 64 + 8 + 1 = 11001001_2$ (four 1s)
- $24 = 16 + 8 = 00011000_2$ (two 1s)
- $58 = 32 + 16 + 8 + 2 = 00111010_2$ (four 1s)

**3. Directed Broadcast Address (DBA):**
Set all 8 host bits to 1s:
$$\\text{DBA} = 201.24.58.255$$
Octet $255 = 11111111_2$ (eight 1s).
$$a = 4 + 2 + 4 + 8 = 18$$

**4. Network ID:**
Set all 8 host bits to 0s:
$$\\text{NetID} = 201.24.58.0$$
Octet $0 = 00000000_2$ (zero 1s).
$$b = 4 + 2 + 4 + 0 = 10$$

**5. Result:**
$$a + b = 18 + 10 = 28$$

**Correct Answer: 28**`
  },

  // ─── Q.4 (SCQ) ───
  {
    id: "me-cn-twt18-q04",
    difficulty: "easy",
    concept: "Subnetting Host Calculation",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `In a Class C network, if the subnet mask is \`255.255.255.244\` (or \`248\`), how many hosts can be accommodated in each subnet?`,
    options: [
      "32",
      "8",
      "30",
      "6"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
For the fourth octet:
- In binary, $248 = 11111000_2$, which has $h = 3$ host bits (or for non-contiguous mask 244 $= 11110100_2$ having 3 zero bits).
- Number of assignable host addresses per subnet:
$$2^h - 2 = 2^3 - 2 = 8 - 2 = 6$$

**Correct Answer: Option 4 (6)**`
  },

  // ─── Q.5 (SCQ) ───
  {
    id: "me-cn-twt18-q05",
    difficulty: "medium",
    concept: "Distance Vector vs Link State Routing",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Which of the following statements is correct?`,
    options: [
      "In Distance Vector routing, a router may select a non-optimal route temporarily after a topology change because routing information is obtained only from neighboring routers and convergence may take time.",
      "In Link State routing, routers exchange their entire routing tables periodically with neighbors, and each router directly applies Bellman-Ford algorithm on received information.",
      "In Distance Vector routing, every router maintains the complete topology database of the network and independently calculates shortest paths.",
      "OSPF reduces routing overhead by avoiding topology information exchange and calculating routes only from the next-hop information received from neighbors."
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- **Statement 1 is correct:** Distance Vector routing relies on "routing by rumor." Routers only know distances reported by neighbors, so after link failures, slow convergence can temporarily lead to sub-optimal routes and transient loops (count-to-infinity).
- **Statement 2 is incorrect:** Link State routers flood link states (not routing tables) and execute Dijkstra's SPF algorithm (not Bellman-Ford).
- **Statement 3 is incorrect:** Maintaining a full network topology map is a property of Link State routing, not Distance Vector routing.
- **Statement 4 is incorrect:** OSPF (Open Shortest Path First) is a link-state protocol where all routers maintain the entire area's topology via LSAs.

**Correct Answer: Option 1**`
  },

  // ─── Q.6 (MCQ) ───
  {
    id: "me-cn-twt18-q06",
    difficulty: "medium",
    concept: "OSPF Routing Protocol Properties",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements is/are correct about the OSPF routing protocol?`,
    options: [
      "OSPF ensures that all routers in an area compute identical shortest path trees.",
      "OSPF uses sequence numbers and aging to prevent routing loops due to stale information.",
      "OSPF guarantees loop-free routing even during transient states before convergence.",
      "OSPF restricts LSA flooding to within an area, except for summary LSAs."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 3],
    explanation: `### Solution
- **Statement 1 is incorrect:** All routers in an area build an identical **Link State Database (LSDB)**, but each router computes its own **Shortest Path Tree (SPT)** rooted at itself.
- **Statement 2 is correct:** OSPF LSAs use 32-bit sequence numbers and age fields (MaxAge = 3600 s) to discard outdated or duplicate advertisements.
- **Statement 3 is incorrect:** During transient convergence phases, inconsistent LSDBs across routers can cause temporary micro-loops.
- **Statement 4 is correct:** Router (Type 1) and Network (Type 2) LSAs are restricted to their local area. Summary LSAs (Type 3) are flooded across areas by Area Border Routers (ABRs).

**Correct Statements: 2 and 4**`
  },

  // ─── Q.7 (NAT) ───
  {
    id: "me-cn-twt18-q07",
    difficulty: "medium",
    concept: "TCP Cumulative Acknowledgment",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 1000,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt18_q07.png",
    imageAlt: "TCP packet sequence trace showing segment 600-799 retransmission and cumulative acknowledgment w",
    text: `Segments are transmitted from client TCP to server TCP as shown in the sequence diagram. Calculate the value of $w$ in the acknowledgment transmitted by the server TCP to the client TCP. ________`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Trace of TCP sequence exchange:**
1. Client sends \`seq(300 - 599)\` $\\rightarrow$ Server receives bytes 300–599 and replies \`Ack 600\`.
2. Client sends \`seq(600 - 799)\` (this segment is lost or delayed).
3. Client sends \`seq(800 - 899)\` $\\rightarrow$ Out-of-order! Server buffers it and sends duplicate \`Ack 600\`.
4. Client sends \`seq(900 - 999)\` $\\rightarrow$ Out-of-order! Server buffers it and sends duplicate \`Ack 600\`.
5. Retransmission of \`seq(600 - 799)\` arrives at the Server.

Now the Server has all contiguous bytes from 300 through 999:
- 300–599 (delivered)
- 600–799 (just received)
- 800–899 (buffered earlier)
- 900–999 (buffered earlier)

Because TCP uses **cumulative acknowledgments**, the acknowledgment number indicates the **next expected in-order byte**:
$$w = 999 + 1 = 1000$$

**Correct Answer: 1000**`
  },

  // ─── Q.8 (NAT) ───
  {
    id: "me-cn-twt18-q08",
    difficulty: "hard",
    concept: "TCP Sequence Number Wrap-around & Link Capacity",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 382,
    natTolerance: 5,
    text: `A TCP sender transmits data continuously over a connection. TCP uses a 32-bit byte-oriented sequence number field. The sender starts transmission with an initial sequence number of $2^{31} + 1000$.

The network may retain an old TCP segment for a maximum duration of 120 seconds (MSL). To avoid sequence number ambiguity, the sender must ensure that the sequence number space does not wrap around during this interval.

If the sender utilizes only 75% of the available link capacity, what is the maximum physical link capacity (in Mbps) that can be supported? ________ (Assume $1\\text{ Mbps} = 10^6\\text{ bits/s}$. Round the answer to the nearest integer).`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**1. Total Sequence Number Space:**
$$2^{32}\\text{ bytes} = 4,294,967,296\\text{ bytes}$$

**2. Maximum Safe Data Rate:**
To avoid wrap-around ambiguity within the lifetime $T = 120\\text{ s}$:
$$R_{\\text{data}} \\le \\frac{2^{32} \\times 8\\text{ bits}}{120\\text{ s}} = \\frac{34,359,738,368}{120} \\approx 286.331 \\times 10^6\\text{ bits/s} = 286.331\\text{ Mbps}$$

**3. Link Capacity:**
Since the sender utilizes only $75\\%$ ($0.75$) of the link capacity $C$:
$$R_{\\text{data}} = 0.75 \\times C$$
$$C = \\frac{286.331}{0.75} \\approx 381.77\\text{ Mbps} \\approx 382\\text{ Mbps}$$

**Correct Answer: 382**`
  },

  // ─── Q.9 (MCQ) ───
  {
    id: "me-cn-twt18-q09",
    difficulty: "easy",
    concept: "TCP Core Properties",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements are true about the Transmission Control Protocol (TCP)?`,
    options: [
      "It supports elastic applications by adapting the data transfer rate based on network conditions.",
      "It supports broadcasting to multiple receivers simultaneously.",
      "It is a connectionless protocol.",
      "It supports full-duplex communication between sender and receiver."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 3],
    explanation: `### Solution
- **Statement 1 is true:** Elastic applications (e.g., HTTP, FTP) adapt to varying transmission rates. TCP's congestion control mechanism dynamically adjusts transmission rate based on network congestion.
- **Statement 2 is false:** TCP is strictly a unicast (point-to-point) protocol. It does not support broadcast or multicast.
- **Statement 3 is false:** TCP is a connection-oriented protocol.
- **Statement 4 is true:** TCP provides bidirectional (full-duplex) communication using independent sequence numbers and buffers in both directions.

**Correct Statements: 1 and 4**`
  },

  // ─── Q.10 (NAT) ───
  {
    id: "me-cn-twt18-q10",
    difficulty: "medium",
    concept: "CIDR Address Block Allocation",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 64,
    natTolerance: 0,
    text: `An ISP has the following chunk of CIDR based IP addresses available: \`121.27.128.0/20\`. The ISP has allocated half of this chunk to an organization of type A and is left with the remaining half to allocate to organizations of type B. If each organization of type B requires 32 addresses, then the number of organizations of type B that can be served by the ISP is equal to ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Total addresses in the /20 block:**
$$\\text{Total Addresses} = 2^{32 - 20} = 2^{12} = 4096\\text{ addresses}$$

2. **Addresses remaining after allocating half to Type A:**
$$\\text{Remaining Addresses} = \\frac{4096}{2} = 2048\\text{ addresses}$$

3. **Number of Type B organizations served:**
Each Type B organization requires 32 addresses:
$$\\text{Number of Organizations} = \\frac{2048}{32} = 64$$

**Correct Answer: 64**`
  },

  // ─── Q.11 (SCQ) ───
  {
    id: "me-cn-twt18-q11",
    difficulty: "medium",
    concept: "Subnetting First and Last Subnet Addresses",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider a network with IP address \`202.19.68.0/24\`. We wish to divide this network into subnets consisting of at least 10 hosts each. Then the Network ID and the Directed Broadcast Address (DBA) of the first and the last subnet respectively are:`,
    options: [
      "202.19.64.0/24, 202.19.64.255/24",
      "202.19.68.0/26, 202.19.68.192/26",
      "202.19.68.0/28, 202.19.68.192/28",
      "202.19.68.0/28, 202.19.68.255/28"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
**1. Determine Host Bits ($h$):**
For at least 10 usable hosts per subnet:
$$2^h - 2 \\ge 10 \\implies 2^h \\ge 12 \\implies h = 4\\text{ bits}$$
With $h = 4$, each subnet has a block size of $2^4 = 16$ IP addresses.

**2. Subnet Mask:**
$$\\text{Prefix length} = 32 - 4 = /28$$

**3. Subnet Ranges:**
- Total subnets $= 2^{28 - 24} = 2^4 = 16$ subnets.
- **First Subnet:**
  - Range: \`202.19.68.0\` to \`202.19.68.15\`
  - Network ID: **202.19.68.0/28**
- **Last (16th) Subnet:**
  - Range: \`202.19.68.240\` to \`202.19.68.255\`
  - Directed Broadcast Address (DBA): **202.19.68.255/28**

**Correct Answer: Option 4**`
  },

  // ─── Q.12 (NAT) ───
  {
    id: "me-cn-twt18-q12",
    difficulty: "medium",
    concept: "IPv4 Fragmentation Offset Calculation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 144,
    natTolerance: 0,
    text: `Consider an IP packet with a length of 4500 bytes that includes a 20-byte IPv4 header and 40 bytes TCP header. The packet is forwarded to an IPv4 router that supports an MTU of 600 bytes. Assume that the length of the IP header in all outgoing fragments is 20 bytes, and the fragmentation offset stored in the first fragment is 0.

The fragmentation offset stored in the third fragment is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Total IP payload to fragment:**
$$\\text{Payload} = 4500 - 20 = 4480\\text{ bytes}$$

2. **Maximum payload per fragment under MTU = 600 bytes:**
$$\\text{Available space for data} = 600 - 20 = 580\\text{ bytes}$$
Because the Fragmentation Offset is measured in 8-byte units, data length per fragment must be a multiple of 8:
$$\\left\\lfloor \\frac{580}{8} \\right\\rfloor \\times 8 = 72 \\times 8 = 576\\text{ bytes}$$

3. **Fragment breakdown:**
- **Fragment 1:** Bytes $0 - 575$ (length 576). $\\text{Offset} = 0 / 8 = 0$.
- **Fragment 2:** Bytes $576 - 1151$ (length 576). $\\text{Offset} = 576 / 8 = 72$.
- **Fragment 3:** Starts at byte $1152$.
$$\\text{Offset} = \\frac{1152}{8} = 144$$

**Correct Answer: 144**`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-cn-twt18-q13",
    difficulty: "easy",
    concept: "End-to-End Transport Layer Encapsulation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt18_q13.png",
    imageAlt: "Source S connected to Destination D via mediating router R",
    text: `In the diagram, source S is connected to destination D via the mediating router R:
$$\\text{S} - \\text{R} - \\text{D}$$
How many times are transport TCP headers attached and removed during the transfer of a packet?`,
    options: [
      "2, 2",
      "1, 1",
      "3, 3",
      "None of these"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- The transport layer (TCP) is an **end-to-end** protocol.
- The TCP header is encapsulated **once** at the sending host (source S) when creating the segment.
- The intermediate router R operates up to Layer 3 (Network layer) and forwards packets without touching Layer 4 (Transport layer) headers.
- The TCP header is decapsulated and removed **once** at the receiving host (destination D).

Therefore, the TCP header is attached **1 time** and removed **1 time**.

**Correct Answer: Option 2 (1, 1)**`
  },

  // ─── Q.14 (NAT) ───
  {
    id: "me-cn-twt18-q14",
    difficulty: "medium",
    concept: "TCP Round Trip Time (RTT) Estimation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 33.58,
    natTolerance: 0.05,
    text: `Assume that the TCP Round Trip Time (RTT) is currently 35 msec and the following ACKs come in after 36, 40, and 25 ms respectively. What is the new estimated RTT in ms with $\\alpha = 0.75$? ________ (Up to 2 decimal places).`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Jacobson’s formula for Estimated RTT:
$$\\text{EstimatedRTT}_{k} = \\alpha \\cdot \\text{EstimatedRTT}_{k-1} + (1 - \\alpha) \\cdot \\text{SampleRTT}_k$$

Given: Initial $\\text{EstimatedRTT}_0 = 35\\text{ ms}$, $\\alpha = 0.75$, $1 - \\alpha = 0.25$.

**1. After Sample 1 ($36\\text{ ms}$):**
$$\\text{RTT}_1 = (0.75 \\times 35) + (0.25 \\times 36) = 26.25 + 9.0 = 35.25\\text{ ms}$$

**2. After Sample 2 ($40\\text{ ms}$):**
$$\\text{RTT}_2 = (0.75 \\times 35.25) + (0.25 \\times 40) = 26.4375 + 10.0 = 36.4375\\text{ ms}$$

**3. After Sample 3 ($25\\text{ ms}$):**
$$\\text{RTT}_3 = (0.75 \\times 36.4375) + (0.25 \\times 25) = 27.328125 + 6.25 = 33.578125\\text{ ms} \\approx 33.58\\text{ ms}$$

**Correct Answer: 33.58**`
  },

  // ─── Q.15 (MCQ) ───
  {
    id: "me-cn-twt18-q15",
    difficulty: "hard",
    concept: "Route Aggregation (CIDR Supernetting)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt18_q15.png",
    imageAlt: "Routing table with subnets 10.40.64.0/22, 10.40.68.0/23, 10.40.70.0/23, 10.40.72.0/21",
    text: `Consider the routing table of an organization’s router shown below:
- \`10.40.64.0\` with mask \`255.255.252.0\`
- \`10.40.68.0\` with mask \`255.255.254.0\`
- \`10.40.70.0\` with mask \`255.255.254.0\`
- \`10.40.72.0\` with mask \`255.255.248.0\`

Which of the following prefixes in CIDR notation can be collectively used to correctly aggregate all of the subnets in the routing table?`,
    options: [
      "10.40.64.0/21",
      "10.40.72.0/21",
      "10.40.64.0/20",
      "10.40.68.0/22"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
Let's analyze the third octet ranges:
1. \`10.40.64.0\`, mask \`255.255.252.0\` (/22): Covers third-octet range $[64, 67]$ (4 subnets).
2. \`10.40.68.0\`, mask \`255.255.254.0\` (/23): Covers third-octet range $[68, 69]$ (2 subnets).
3. \`10.40.70.0\`, mask \`255.255.254.0\` (/23): Covers third-octet range $[70, 71]$ (2 subnets).
   - Aggregating entries 1, 2, and 3 covers $[64, 71]$ (8 subnets) $\\rightarrow$ **10.40.64.0/21**.
4. \`10.40.72.0\`, mask \`255.255.248.0\` (/21): Covers third-octet range $[72, 79]$ (8 subnets) $\\rightarrow$ **10.40.72.0/21**.

- Together, **10.40.64.0/21** and **10.40.72.0/21** aggregate all the routes into two prefixes.
- Furthermore, combining $[64, 71]$ and $[72, 79]$ covers 16 continuous subnets $[64, 79]$, which corresponds to the single supernet **10.40.64.0/20**.

**Correct Options: 1, 2, and 3**`
  },

  // ─── Q.16 (MCQ) ───
  {
    id: "me-cn-twt18-q16",
    difficulty: "medium",
    concept: "TCP Three-Way Handshake Fields",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Consider the TCP 3-way handshake used for connection establishment between a client and a server. Let the client’s Initial Sequence Number (ISN) be $x$ and the server’s ISN be $y$. Let $P_1$, $P_2$, and $P_3$ be the first, second, and third packets of the handshake, respectively. Which of the following statements is/are correct?`,
    options: [
      "In P2, the Acknowledgment Number (ACK) is x + 1.",
      "In P3, the Acknowledgment Number (ACK) is y + 1.",
      "In P1, the Acknowledgment Number (ACK) is x + 1.",
      "In P2, the Sequence Number (Sequence) is y."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    explanation: `### Solution
During the TCP 3-way connection setup:
1. **Packet $P_1$ (Client $\\rightarrow$ Server):**
   - SYN = 1, ACK = 0
   - $\\text{Seq} = x$
   - (No valid ACK number since ACK flag is not set).
2. **Packet $P_2$ (Server $\\rightarrow$ Client):**
   - SYN = 1, ACK = 1
   - $\\text{Seq} = y$ (Statement 4 is correct)
   - $\\text{ACK} = x + 1$ (Statement 1 is correct)
3. **Packet $P_3$ (Client $\\rightarrow$ Server):**
   - ACK = 1
   - $\\text{Seq} = x + 1$
   - $\\text{ACK} = y + 1$ (Statement 2 is correct)

**Correct Statements: 1, 2, and 4**`
  },

  // ─── Q.17 (NAT) ───
  {
    id: "me-cn-twt18-q17",
    difficulty: "hard",
    concept: "Distance Vector Routing & Count-to-Infinity",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 2,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt18_q17.png",
    imageAlt: "Network of 6 routers R1 to R6 with link weights",
    text: `Consider the following network with 6 routers, $R_1$ to $R_6$, connected with links having weights as shown:
- $(R_1, R_2) = 7$, $(R_1, R_3) = 3$
- $(R_2, R_3) = 3$, $(R_2, R_4) = 7$
- $(R_4, R_5) = 1$, $(R_3, R_5) = 10$
- $(R_4, R_6) = 9$, $(R_5, R_6) = 4$

All routers use the Distance Vector routing algorithm. Each router starts with its routing table initialized to contain an entry for each neighbor with the weight of the respective connecting link. After all routing tables stabilize, how many links are there in the network which, if they fail (go down), will NOT lead to the count-to-infinity problem? ________`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**1. Identification of Unused Links:**
After distance vector routing stabilizes, let's find the shortest paths between all pairs of adjacent routers:
- For $(R_1, R_2)$: Direct cost is $7$. However, the path $R_1 \\rightarrow R_3 \\rightarrow R_2$ has cost $3 + 3 = 6 < 7$. Therefore, the direct link $(R_1, R_2)$ is **never used** by any shortest path.
- For $(R_4, R_6)$: Direct cost is $9$. However, the path $R_4 \\rightarrow R_5 \\rightarrow R_6$ has cost $1 + 4 = 5 < 9$. Therefore, the direct link $(R_4, R_6)$ is **never used** by any shortest path.

**2. Behavior on Link Failure:**
- Because links $(R_1, R_2)$ and $(R_4, R_6)$ are not used in any router's shortest path / forwarding table, if either of these 2 links goes down, **no router's distance vector changes**. Hence, no updates are triggered and **no count-to-infinity occurs**.
- For all other (used) links, when a link on an active routing path fails without split horizon / poison reverse, circular dependencies between neighbors will trigger the count-to-infinity loop.

Thus, exactly **2** links will not lead to the count-to-infinity problem when they go down.

**Correct Answer: 2**`
  }
];

export const MADE_EASY_CN_TWT18_CHAPTER: Chapter = {
  id: "cn-gate-2027-twt-18",
  name: "GATE 2027 CS TOPIC WISE TEST - 18 (Computer Networks - 2)",
  description: "Made Easy GATE 2027 Test 18: IPv4 Addressing & Subnetting, OSPF & Distance Vector, TCP 3-Way Handshake, Sequence Numbers, Fragmentation, RTT",
  questions: MADE_EASY_CN_TWT18_QUESTIONS
};
