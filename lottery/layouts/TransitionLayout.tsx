import {
  AnimationControls,
  motion,
  Target,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";
import { useRouter } from "next/router";

export const TransitionLayout: IComponent<{
  id?: string;
  initial?: boolean | Target | VariantLabels;
  animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
}> = ({
  id,
  children,
  initial = { opacity: 0, y: 100 },
  animate = { opacity: 1, y: 0 },
}) => {
  const router = useRouter();
  const pathname = router.pathname;

  const simplePathname = id ?? pathname.split("/")[2];

  return (
    <motion.div
      key={simplePathname}
      initial={initial}
      animate={animate}
      className="h-full w-full z-0 duration-150"
    >
      {children}
    </motion.div>
  );
};
