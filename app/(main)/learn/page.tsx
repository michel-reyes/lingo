import { FeedWrapper } from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { Header } from './header';
import { UserProgress } from '@/components/user-progress';

export default function Learn() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: 'sample', imageSrc: '/es.svg' }}
          hearts={3}
          points={12}
          hasActiveSubscription={true}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="sample" />
        sample
      </FeedWrapper>
    </div>
  );
}
