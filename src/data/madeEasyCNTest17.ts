import type { Question, Chapter } from "./quizData";

export const MADE_EASY_CN_TWT17_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-cn-twt17-q01",
    difficulty: "medium",
    concept: "Binary Exponential Backoff",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Binary exponential backoff is a mechanism used in some MAC protocols. Which of the following statements is correct?`,
    options: [
      "It ensures that two nodes that experience a collision in a time slot will never collide with each other when they each retry that packet.",
      "It ensures that two or more nodes that experience a collision in a time slot will experience a lower probability of colliding with each other when they each retry that packet.",
      "It can be used with slotted Aloha but not with carrier sense multiple access.",
      "Over short time scales, it improves the fairness of the throughput achieved by different nodes compared to not using the mechanism."
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **Statement 1 is incorrect:** Backoff only expands the contention window (e.g., from $[0, 1]$ to $[0, 3]$ to $[0, 7]$). Nodes can still randomly pick the same backoff slot, so collisions can still occur.
- **Statement 2 is correct:** By doubling the range of random slots from which the colliding nodes choose on each successive collision ($[0, 2^k - 1]$), the probability that they choose the same slot decreases significantly.
- **Statement 3 is incorrect:** Exponential backoff is widely used in CSMA/CD (Ethernet) and CSMA/CA (Wi-Fi).
- **Statement 4 is incorrect:** Over short time scales, exponential backoff actually suffers from the **capture effect**, where a newly transmitting node with backoff counter 0 has a higher probability of winning over an older node with a large backoff window, causing unfairness.

**Correct Answer: Option 2**`
  },

  // ─── Q.2 (MCQ) ───
  {
    id: "me-cn-twt17-q02",
    difficulty: "easy",
    concept: "Network Protocols & IP Header",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statement(s) is/are correct?`,
    options: [
      "HTTP uses the services of TCP on port 80 and is a stateless protocol.",
      "In IPv4, routers decrement the Time-To-Live (TTL) field before forwarding a packet. If the TTL becomes zero, the packet is discarded.",
      "The Identification, Flags, and Fragment Offset fields in the IPv4 header together enable the reassembly of fragmented IPv4 datagrams at the destination.",
      "In non-persistent HTTP, a single TCP connection is used to carry multiple HTTP request-response pairs."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
- **Statement 1 is correct:** HTTP runs over TCP (default well-known port 80) and retains no session state between requests without cookies/sessions.
- **Statement 2 is correct:** Each router decrements the TTL field by at least 1. If TTL reaches 0, the datagram is dropped and an ICMP Time Exceeded (Type 11) error is sent to the source.
- **Statement 3 is correct:** The Identification field groups fragments of the same datagram, the MF flag indicates more fragments follow, and the Fragment Offset indicates the fragment's position in 8-byte units.
- **Statement 4 is incorrect:** In **non-persistent HTTP**, each request/response pair requires a brand new TCP connection. Carrying multiple request-response pairs over a single connection is a feature of **persistent HTTP**.

**Correct Statements: 1, 2, and 3**`
  },

  // ─── Q.3 (SCQ) ───
  {
    id: "me-cn-twt17-q03",
    difficulty: "medium",
    concept: "CRC Polynomial Division",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `What is the remainder obtained by dividing $x^7 + x^5 + 1$ by the generator polynomial $x^3 + 1$?`,
    options: [
      "000",
      "010",
      "101",
      "111"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
In polynomial division over GF(2) (modulo-2 arithmetic):

Dividend: $x^7 + x^5 + 1 \\rightarrow 10100001_2$
Divisor: $x^3 + 1 \\rightarrow 1001_2$

Performing standard modulo-2 division:
- $x^7 / x^3 = x^4$
  $(x^7 + x^5 + 1) \\oplus x^4(x^3 + 1) = (x^7 + x^5 + 1) \\oplus (x^7 + x^4) = x^5 + x^4 + 1$
- $(x^5 + x^4 + 1) / x^3 = x^2$
  $(x^5 + x^4 + 1) \\oplus x^2(x^3 + 1) = (x^5 + x^4 + 1) \\oplus (x^5 + x^2) = x^4 + x^2 + 1$
- $(x^4 + x^2 + 1) / x^3 = x$
  $(x^4 + x^2 + 1) \\oplus x(x^3 + 1) = (x^4 + x^2 + 1) \\oplus (x^4 + x) = x^2 + x + 1$

The degree of $x^2 + x + 1$ is 2, which is less than the degree of generator $x^3 + 1$ (degree 3).
In 3-bit binary representation:
$x^2 + x + 1 \\rightarrow 111_2$

**Correct Answer: Option 4 (111)**`
  },

  // ─── Q.4 (NAT) ───
  {
    id: "me-cn-twt17-q04",
    difficulty: "medium",
    concept: "Hamming Distance",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 4,
    natTolerance: 0,
    text: `Consider the following set of codewords:
\`00000000\`, \`00000011\`, \`00001001\`, \`00001010\`, \`00001100\`, \`00010100\`, \`00101011\`

The difference between minimum and maximum Hamming distance between these codewords is __________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**1. Minimum Hamming Distance ($d_{min}$):**
- $d(00000000, 00000011) = 2$
- $d(00000011, 00001001) = 2$
- $d(00001001, 00001010) = 2$
Since no two codewords differ by only 1 bit, $d_{min} = 2$.

**2. Maximum Hamming Distance ($d_{max}$):**
Check pairs with the greatest bit differences:
- Compare \`00010100\` (1s at bit positions 2 and 4 from right) and \`00101011\` (1s at bit positions 0, 1, 3, 5):
  \`00010100\` $\\oplus$ \`00101011\` = \`00111111\` (Weight = 6).
  Thus, $d_{max} = 6$.

**Difference:**
$$\\text{Difference} = d_{max} - d_{min} = 6 - 2 = 4$$

**Correct Answer: 4**`
  },

  // ─── Q.5 (MCQ) ───
  {
    id: "me-cn-twt17-q05",
    difficulty: "easy",
    concept: "Network Devices (Hub, Bridge, Switch)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements are correct?`,
    options: [
      "A hub forwards bits without examining MAC addresses.",
      "A bridge filters frames based on MAC addresses.",
      "A switch is essentially a single-port bridge.",
      "A bridge creates one collision domain per port but does not separate broadcast domains."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    explanation: `### Solution
- **Statement 1 is correct:** A hub is a physical layer (Layer 1) device that regenerates and broadcasts incoming electrical signals to all other ports without reading frame headers.
- **Statement 2 is correct:** A bridge operates at Data Link layer (Layer 2) and maintains a filtering/forwarding table based on source and destination MAC addresses.
- **Statement 3 is incorrect:** A switch is a **multi-port bridge**, not a single-port bridge.
- **Statement 4 is correct:** Layer 2 devices (bridges/switches) break up collision domains (each port is in its own collision domain), but they forward broadcast frames to all ports, so there is only one broadcast domain.

**Correct Statements: 1, 2, and 4**`
  },

  // ─── Q.6 (SCQ) ───
  {
    id: "me-cn-twt17-q06",
    difficulty: "easy",
    concept: "Hamming Code Error Detection",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `A 12-bit Hamming code is received as \`0xE4F\`. Assuming that at most one bit is in error, which of the following was the original codeword transmitted?`,
    options: [
      "0xA4F",
      "0xB3E",
      "0xAFF",
      "0xEF4"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
Received codeword: \`0xE4F\` $= 1110\\ 0100\\ 1111_2$.

Since at most **one bit** is in error, the valid transmitted codeword must differ from \`0xE4F\` by at most 1 bit (Hamming distance $\\le 1$):
- **0xA4F:** $1010\\ 0100\\ 1111_2$
  Differs only at bit 10 ($1110 \\rightarrow 1010$, exactly 1 bit difference).
- **0xB3E:** Differs by multiple bits.
- **0xAFF:** Differs by 4 bits.
- **0xEF4:** Differs by multiple bits.

Only **0xA4F** has a Hamming distance of 1 from the received codeword.

**Correct Answer: Option 1 (0xA4F)**`
  },

  // ─── Q.7 (NAT) ───
  {
    id: "me-cn-twt17-q07",
    difficulty: "easy",
    concept: "CSMA/CD Distance vs Data Rate",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 25,
    natTolerance: 0,
    text: `In a CSMA/CD network, the maximum cable length is 1000 m at 50 Mbps. To increase the maximum distance to 2000 m while maintaining proper collision detection, what should be the new data rate? ________ (in Mbps)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
In CSMA/CD, for collision detection to function properly:
$$T_{tx} \\ge 2 \\times T_p \\implies \\frac{L_{min}}{B} \\ge 2 \\times \\frac{d}{v}$$
$$L_{min} \\ge \\frac{2 \\cdot d \\cdot B}{v}$$

Keeping the minimum frame size $L_{min}$ and propagation speed $v$ unchanged:
$$d_1 \\times B_1 = d_2 \\times B_2$$
$$1000 \\times 50 = 2000 \\times B_2$$
$$B_2 = \\frac{1000 \\times 50}{2000} = 25\\text{ Mbps}$$

**Correct Answer: 25**`
  },

  // ─── Q.8 (SCQ) ───
  {
    id: "me-cn-twt17-q08",
    difficulty: "easy",
    concept: "Stop-and-Wait Link Utilization",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Suppose two hosts are connected by a point-to-point link and are configured to use the Stop-and-Wait protocol for reliable data transfer. Assume that the frame size, ACK transmission time, and signal propagation speed remain unchanged. The link length is doubled while the transmission rate remains unchanged. Which one of the following is true regarding the utilization of the communication link?`,
    options: [
      "The utilization increases.",
      "The utilization decreases.",
      "The utilization remains unchanged.",
      "The utilization first increases and then decreases."
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
In Stop-and-Wait protocol:
$$\\eta = \\frac{T_{tx}}{T_{tx} + 2 T_p} = \\frac{1}{1 + 2a}, \\quad \\text{where } a = \\frac{T_p}{T_{tx}} = \\frac{d / v}{L / B}$$

When link length $d$ is doubled:
- Propagation delay $T_p$ doubles.
- Parameter $a$ doubles.
- As $a$ increases, the denominator $(1 + 2a)$ increases, which causes efficiency $\\eta$ to **decrease**.

**Correct Answer: Option 2**`
  },

  // ─── Q.9 (NAT) ───
  {
    id: "me-cn-twt17-q09",
    difficulty: "medium",
    concept: "Switch Interconnection & Usable Ports",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 62,
    natTolerance: 0,
    text: `Consider a LAN consisting of 6 identical 12-port Ethernet switches. Assume that the switches do not have any dedicated uplink ports and are connected using the minimum number of interswitch links required so that all switches can communicate with each other. The maximum number of machines that can be connected to the LAN is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
- Number of switches $N = 6$.
- Total ports across all switches $= 6 \\times 12 = 72$ ports.
- Minimum number of links needed to connect $N$ switches in a connected topology (spanning tree) is $N - 1 = 6 - 1 = 5$ links.
- Each link connects two ports (one port on each switch).
- Total ports consumed by interswitch links $= 2 \\times 5 = 10$ ports.

Remaining ports available for connecting host machines:
$$72 - 10 = 62$$

**Correct Answer: 62**`
  },

  // ─── Q.10 (NAT) ───
  {
    id: "me-cn-twt17-q10",
    difficulty: "hard",
    concept: "Selective Repeat Sequence Number Bits",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 6,
    natTolerance: 0,
    text: `Consider a selective repeat sliding window protocol that uses a frame size of 1 KB to send data on a 1.8 Mbps link with a one-way latency of 50 msec. To achieve a link utilization of 80%, what is the minimum number of bits required to represent the sequence number field?`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
- Frame size $L = 1\\text{ KB} = 1024 \\times 8 = 8192\\text{ bits}$ (or $8000\\text{ bits}$)
- Bandwidth $B = 1.8\\text{ Mbps} = 1.8 \\times 10^6\\text{ bps}$
- Transmission delay $T_t = \\frac{8192}{1.8 \\times 10^6} \\approx 4.551\\text{ ms}$
- Propagation delay $T_p = 50\\text{ ms}$
- Parameter $a = \\frac{T_p}{T_t} = \\frac{50}{4.551} \\approx 10.986$

Link utilization $\\eta = \\frac{W_s}{1 + 2a} \\ge 0.80$:
$$W_s \\ge 0.80 \\times (1 + 2 \\times 10.986) = 0.80 \\times 22.972 \\approx 18.38$$
So, minimum sender window size $W_s = 19$.

In Selective Repeat protocol:
$$W_s + W_r \\le 2^k$$
Since $W_s = W_r$:
$$2 W_s \\le 2^k \\implies 2 \\times 19 = 38 \\le 2^k$$
For $k = 5$: $2^5 = 32 < 38$.
For $k = 6$: $2^6 = 64 \\ge 38$.

Thus, minimum sequence number bits $k = 6$.

**Correct Answer: 6**`
  },

  // ─── Q.11 (NAT) ───
  {
    id: "me-cn-twt17-q11",
    difficulty: "hard",
    concept: "Iterative DNS Resolution Delay",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 90,
    natTolerance: 20,
    text: `Consider the resolution of the domain name \`test.sub.domain.co.in\` by a host H. Assume the following conditions:
1. H sends a recursive query to its local DNS server ($S_{local}$).
2. $S_{local}$ resolves the name using iterative queries.
3. The records for \`.\` (Root) and \`.in\` TLD are already cached in $S_{local}$'s memory. No other records are cached anywhere.
4. Each remaining domain level in the hierarchy (\`.co.in\`, \`domain.co.in\`, \`sub.domain.co.in\`) is managed by a distinct, separate DNS server.
5. Each query-response pair between $S_{local}$ and any external authoritative server takes 20 ms, while the local communication between host H and $S_{local}$ takes 5 ms each way (total 10 ms RTT).

Assuming zero processing delay at all servers, the total time (in milliseconds) required by host H to receive the resolved IP address is ________. (Answer in integer)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Iterative queries by $S_{local}$:**
1. Since the \`.in\` TLD server IP is cached, $S_{local}$ queries the \`.in\` TLD server to obtain the NS record for \`.co.in\` $\\rightarrow 20\\text{ ms}$.
2. $S_{local}$ queries the \`.co.in\` server to obtain the NS record for \`domain.co.in\` $\\rightarrow 20\\text{ ms}$.
3. $S_{local}$ queries the \`domain.co.in\` server to obtain the NS record for \`sub.domain.co.in\` $\\rightarrow 20\\text{ ms}$.
4. $S_{local}$ queries the authoritative server for \`sub.domain.co.in\` to resolve the host address \`test.sub.domain.co.in\` $\\rightarrow 20\\text{ ms}$.

Total external resolution time $= 4 \\times 20\\text{ ms} = 80\\text{ ms}$.

**Local query time:**
Host H sends request to $S_{local}$ and receives final response:
$$\\text{RTT}_{local} = 5\\text{ ms} + 5\\text{ ms} = 10\\text{ ms}$$

**Total Resolution Time:**
$$\\text{Total Time} = 80\\text{ ms} + 10\\text{ ms} = 90\\text{ ms}$$

*(Note: If the query to .in server is counted as cached, external queries would be 3, totaling 70 ms. Standard interpretation yields 90 ms).*

**Correct Answer: 90**`
  },

  // ─── Q.12 (SCQ) ───
  {
    id: "me-cn-twt17-q12",
    difficulty: "medium",
    concept: "Stop-and-Wait Sequence Numbers",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt17_q12.png",
    imageAlt: "Ladder diagram: Frame 0 -> Ack 1 -> Frame 1 -> Ack 1",
    text: `Stop and wait protocol is used in data link layer in which frames are transmitted. Frames are transmitted from sender to receiver with sequence number attached. Once frames reach safely, concerned acknowledgments are transmitted from receiver to sender. Find out the error in the given diagram?`,
    options: [
      "2nd line should not be ack1",
      "3rd line should not be frame1",
      "4th line should not be ack1",
      "None of these"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
In Stop-and-Wait ARQ:
1. Sender transmits **Frame 0**.
2. Receiver receives Frame 0 successfully and returns **Ack 1** (acknowledging Frame 0 and expecting Frame 1 next).
3. Sender receives Ack 1 and transmits **Frame 1**.
4. Receiver receives Frame 1 successfully and must return **Ack 0** (acknowledging Frame 1 and expecting Frame 0 next).

In the diagram, line 4 incorrectly shows **Ack 1** instead of **Ack 0**. Therefore, the 4th line should not be Ack 1.

**Correct Answer: Option 3**`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-cn-twt17-q13",
    difficulty: "medium",
    concept: "Sliding Window Protocol Comparison",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Which of the following is/are correct?`,
    options: [
      "If maximum window size is Q, then number of sequence bits for selective repeat ARQ and GBN-ARQ are log2(Q + 1) and log2(2Q) respectively.",
      "The correct order of buffer sizes in stop and wait, GBN and selective repeat (SR) is stop and wait < GBN < SR.",
      "GBN and selective repeat supports both individual and cumulative ACK’s.",
      "None of these"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
- **Option 1 is incorrect:** For SR with window size $Q$, sequence number bits needed is $\\lceil \\log_2(2Q) \\rceil$. For GBN with sender window size $Q$, sequence number bits needed is $\\lceil \\log_2(Q + 1) \\rceil$. The option has them reversed.
- **Option 2 is incorrect:** At the receiver, both Stop-and-Wait and GBN require a buffer size of only 1 frame. Hence, buffer size is not strictly Stop-and-Wait < GBN.
- **Option 3 is incorrect:** Standard GBN uses cumulative acknowledgments, while Selective Repeat requires individual (selective) acknowledgments.

Since all statements 1, 2, and 3 are incorrect, **None of these** is correct.

**Correct Answer: Option 4 (None of these)**`
  },

  // ─── Q.14 (MCQ) ───
  {
    id: "me-cn-twt17-q14",
    difficulty: "easy",
    concept: "Bit Error Probability (Binomial Model)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `A 4-bit message is transmitted over a noisy channel where each bit flips independently with probability 0.1. Which of the following statements is/are correct?`,
    options: [
      "Probability that all bits are correct is (0.9)⁴.",
      "Probability that exactly one bit is flipped is 4 × 0.1 × (0.9)³.",
      "Probability that at least one bit is flipped is 1 – (0.9)⁴.",
      "Probability that exactly two bits are flipped is (0.1)² (0.9)²."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
Let $n = 4$, $p = 0.1$ (bit flip probability), and $q = 1 - p = 0.9$ (bit correct probability):
- **Statement 1:** $P(\\text{all 4 correct}) = q^4 = (0.9)^4$. (Correct)
- **Statement 2:** $P(\\text{exactly 1 flipped}) = \\binom{4}{1} p^1 q^3 = 4 \\times 0.1 \\times (0.9)^3$. (Correct)
- **Statement 3:** $P(\\text{at least 1 flipped}) = 1 - P(\\text{all 4 correct}) = 1 - (0.9)^4$. (Correct)
- **Statement 4:** $P(\\text{exactly 2 flipped}) = \\binom{4}{2} p^2 q^2 = 6 \\times (0.1)^2 (0.9)^2$. The statement is missing the factor $\\binom{4}{2} = 6$. (Incorrect)

**Correct Statements: 1, 2, and 3**`
  },

  // ─── Q.15 (NAT) ───
  {
    id: "me-cn-twt17-q15",
    difficulty: "easy",
    concept: "Collision and Broadcast Domains",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 5,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt17_q15.png",
    imageAlt: "A 4-port Bridge connecting nodes 1, 2, 3, 4",
    text: `In the below diagram, the sum value of collision domains + broadcast domains is _________. (LAN is not converted into VLAN)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
From the diagram:
- A Bridge connects 4 separate stations via 4 ports.
- A Bridge is a Layer 2 device that isolates collision domains per port:
  $$\\text{Collision Domains} = 4$$
- A Bridge does not isolate broadcast domains (all ports belong to one common broadcast domain):
  $$\\text{Broadcast Domains} = 1$$

$$\\text{Sum} = 4 + 1 = 5$$

**Correct Answer: 5**`
  },

  // ─── Q.16 (MCQ) ───
  {
    id: "me-cn-twt17-q16",
    difficulty: "medium",
    concept: "CSMA/CD Constraints",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements are true for a CSMA/CD network?`,
    options: [
      "Increasing data rate decreases maximum network length.",
      "The maximum propagation delay in a CSMA/CD network is independent of the physical length of the cable.",
      "For correct collision detection in CSMA/CD, the minimum frame size must be at least equal to the product of data rate and twice the maximum propagation delay.",
      "Increasing cable length increases the chance of collision detection failure."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 3],
    explanation: `### Solution
In CSMA/CD, the condition for collision detection is:
$$L_{min} \\ge 2 \\times T_p \\times B = 2 \\times \\frac{d}{v} \\times B$$
$$\\implies d \\le \\frac{L_{min} \\cdot v}{2 B}$$

- **Statement 1 is true:** As data rate $B$ increases, the maximum cable length $d$ decreases inversely ($d \\propto 1/B$).
- **Statement 2 is false:** $T_p = d / v$ directly depends on the physical cable length $d$.
- **Statement 3 is true:** $L_{min} \\ge B \\times (2 T_p)$.
- **Statement 4 is true:** If cable length increases without proportionately increasing the frame size, transmission finishes before the collision signal returns ($T_{tx} < 2 T_p$), causing collision detection to fail.

**Correct Statements: 1, 3, and 4**`
  },

  // ─── Q.17 (NAT) ───
  {
    id: "me-cn-twt17-q17",
    difficulty: "hard",
    concept: "Ethernet Binary Exponential Backoff Probability",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0.625,
    natTolerance: 0.005,
    text: `A and B are the only two stations on an ethernet. Each has a steady queue of frames to send. Both A and B attempt to transmit a frame, collide and A wins the first backoff race. At the end of this successful transmission by A, both A and B attempt to transmit and collide. The probability that A wins the second backoff race is _________. (Up to 3 decimal places)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Initial collision:**
Both had collision 1. A won, so A successfully sent its frame and reset its collision counter to 0 for its next frame.
Station B failed, so B's frame has suffered 1 collision.

**Second collision:**
Both attempt to transmit and collide again:
- For **Station A**: This is the **first collision** for its new frame.
  Backoff range: $[0, 2^1 - 1] = \\{0, 1\\}$. A picks $K_A \\in \\{0, 1\\}$ with equal probability $1/2$.
- For **Station B**: This is the **second consecutive collision** for its current frame.
  Backoff range: $[0, 2^2 - 1] = \\{0, 1, 2, 3\\}$. B picks $K_B \\in \\{0, 1, 2, 3\\}$ with equal probability $1/4$.

Total outcomes $(K_A, K_B) = 2 \\times 4 = 8$ equally likely outcomes.

Station A wins the race if $K_A < K_B$:
- If $K_A = 0$: $K_B \\in \\{1, 2, 3\\}$ (3 outcomes)
- If $K_A = 1$: $K_B \\in \\{2, 3\\}$ (2 outcomes)

Total favorable outcomes $= 3 + 2 = 5$.
$$P(\\text{A wins}) = \\frac{5}{8} = 0.625$$

**Correct Answer: 0.625**`
  }
];

export const MADE_EASY_CN_TWT17_CHAPTER: Chapter = {
  id: "cn-gate-2027-twt-17",
  name: "GATE 2027 CS TOPIC WISE TEST - 17 (Computer Networks)",
  description: "Made Easy GATE 2027 Test 17: Physical & Data Link Layer, CSMA/CD, Sliding Window Protocols, CRC, Hamming Codes, Devices",
  questions: MADE_EASY_CN_TWT17_QUESTIONS
};
