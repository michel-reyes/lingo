import { getLesson, getUserProgress } from '@/db/queries';
import { redirect } from 'next/navigation';
import { Quiz } from './quiz';

export default async function LessonPage() {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) {
    redirect('/learn');
  }

  const initialPertcentage =
    lesson.challenges.filter((challenge) => challenge.completed).length /
    lesson.challenges.length;

  return (
    <div>
      <Quiz
        initialLessonId={lesson.id}
        initialLessonChallenges={lesson.challenges}
        initialHearts={userProgress.hearts}
        initialPercentage={initialPertcentage}
        userSubscription={null}
      />
    </div>
  );
}
