import {
  type FeatureFlagName,
  canViewFeature,
} from "@/lib/config/featureflags";
import { getUser } from "@/lib/config/user";
import type { ReactNode } from "react";

export function FeatureFlag({
  featureFlag,
  children,
}: {
  featureFlag: FeatureFlagName | FeatureFlagName[];
  children: ReactNode;
}) {
  const user = getUser();

  if (Array.isArray(featureFlag)) {
    return featureFlag.every((flag) => canViewFeature(flag, user))
      ? children
      : null;
  }

  return canViewFeature(featureFlag, user) ? children : null;
}
