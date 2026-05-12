import prisma from '../src/lib/db/prisma';
import { candidateQuestions } from '../src/content/questions/candidate';

async function main() {
  console.log('Seeding Database with Questions...');

  // Clear existing questions to avoid duplicates on re-run
  await prisma.question.deleteMany({});
  
  for (const q of candidateQuestions) {
    await prisma.question.create({
      data: {
        role: 'candidate',
        phaseKey: q.phase,
        situation: q.situation,
        options: {
          create: Object.entries(q.options).map(([key, opt]) => ({
            optionKey: key,
            text: opt.text,
            tendency: opt.tendency,
          })),
        },
      },
    });
  }

  console.log(`Successfully seeded ${candidateQuestions.length} candidate questions.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
