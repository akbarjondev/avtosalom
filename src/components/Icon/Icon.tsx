import { Search, Heart, GitCompareArrows, MessageCircleMore, Presentation } from 'lucide-react';

interface IconProps {
  className?: string;
  icon: string;
  size?: number;
  color?: string;
}

export const Icon = (props: IconProps) => {
  const {icon, ...rest} = props
  switch (icon) {
    case 'heart':
      return <Heart {...rest} />;
    case 'search':
      return <Search {...rest} />;
    case 'compare':
      return <GitCompareArrows {...rest} />;
    case 'message':
      return <MessageCircleMore {...rest} />;
    case 'presentation':
      return <Presentation {...rest} />;
    default:
      return <></>;
  }
}