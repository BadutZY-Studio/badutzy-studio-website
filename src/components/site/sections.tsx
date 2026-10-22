import { Fragment, useEffect, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Blocks,
  Coffee,
  Compass,
  FlaskConical,
  Gamepad2,
  Github,
  Globe,
  Instagram,
  Layers,
  Lightbulb,
  Monitor,
  PenTool,
  Rocket,
  Target,
  Terminal,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { EASE, Magnetic, MagicCard, Reveal, Section, SectionHeading } from "./primitives";
import { games, statusLabel, type GameDetail } from "@/data/games";

function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={className}
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}

function ModrinthIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.252 0.004a11.78 11.768 0 0 0 -8.92 3.73 11 10.999 0 0 0 -2.17 3.11 11.37 11.359 0 0 0 -1.16 5.169c0 1.42 0.17 2.5 0.6 3.77 0.24 0.759 0.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c0.44 0.05 2.54 0.07 2.76 0.02 0.2 -0.04 0.22 0.1 -0.26 -1.7l-0.36 -1.37 -1.01 -0.06a8.5 8.489 0 0 1 -5.18 -1.8 5.34 5.34 0 0 1 -1.3 -1.26c0 -0.05 0.34 -0.28 0.74 -0.5a37.572 37.545 0 0 1 2.88 -1.629c0.03 0 0.5 0.45 1.06 0.98l1 0.97 2.07 -0.43 2.06 -0.43 1.47 -1.47c0.8 -0.8 1.48 -1.5 1.48 -1.52 0 -0.09 -0.42 -1.63 -0.46 -1.7 -0.04 -0.06 -0.2 -0.03 -1.02 0.18 -0.53 0.13 -1.2 0.3 -1.45 0.4l-0.48 0.15 -0.53 0.53 -0.53 0.53 -0.93 0.1 -0.93 0.07 -0.52 -0.5a2.7 2.7 0 0 1 -0.96 -1.7l-0.13 -0.6 0.43 -0.57c0.68 -0.9 0.68 -0.9 1.46 -1.1 0.4 -0.1 0.65 -0.2 0.83 -0.33 0.13 -0.099 0.65 -0.579 1.14 -1.069l0.9 -0.9 -0.7 -0.7 -0.7 -0.7 -1.95 0.54c-1.07 0.3 -1.96 0.53 -1.97 0.53 -0.03 0 -2.23 2.48 -2.63 2.97l-0.29 0.35 0.28 1.03c0.16 0.56 0.3 1.16 0.31 1.34l0.03 0.3 -0.34 0.23c-0.37 0.23 -2.22 1.3 -2.84 1.63 -0.36 0.2 -0.37 0.2 -0.44 0.1 -0.08 -0.1 -0.23 -0.6 -0.32 -1.03 -0.18 -0.86 -0.17 -2.75 0.02 -3.73a8.84 8.839 0 0 1 7.9 -6.93c0.43 -0.03 0.77 -0.08 0.78 -0.1 0.06 -0.17 0.5 -2.999 0.47 -3.039 -0.01 -0.02 -0.1 -0.02 -0.2 -0.03Zm3.68 0.67c-0.2 0 -0.3 0.1 -0.37 0.38 -0.06 0.23 -0.46 2.42 -0.46 2.52 0 0.04 0.1 0.11 0.22 0.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 0.4 2.8c0 1.07 0 1.27 -0.1 1.73a9.37 9.369 0 0 1 -1.76 3.769c-0.32 0.4 -0.98 1.06 -1.37 1.38 -0.38 0.32 -1.54 1.1 -1.7 1.14 -0.1 0.03 -0.1 0.06 -0.07 0.26 0.03 0.18 0.64 2.56 0.7 2.78l0.06 0.06a12.07 12.058 0 0 0 7.27 -9.4c0.13 -0.77 0.13 -2.58 0 -3.4a11.96 11.948 0 0 0 -5.73 -8.578c-0.7 -0.42 -2.05 -1.06 -2.25 -1.06Z" />
    </svg>
  );
}

function CurseforgeIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.326 9.2145S23.2261 8.4418 24 6.1882h-7.5066V4.4H0l2.0318 2.3576V9.173s5.1267 -0.2665 7.1098 1.2372c2.7146 2.516 -3.053 5.917 -3.053 5.917L5.0995 19.6c1.5465 -1.4726 4.494 -3.3775 9.8983 -3.2857 -2.0565 0.65 -4.1245 1.6651 -5.7344 3.2857h10.9248l-1.0288 -3.2726s-7.918 -4.6688 -0.8336 -7.1127z" />
    </svg>
  );
}

/** Unity logo mark, recoloured for a transparent background on a dark theme. */
function UnityLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#ffffff"
        d="m64.414 122.93 47.606-27.49-18.247-10.553-18.656 10.777a1.06 1.06 0 0 1-1.035-.008 1.054 1.054 0 0 1-.523-.898V69.164c0-.754.39-1.437 1.043-1.812L96.77 54.55a1.03 1.03 0 0 1 1.035.008c.324.18.527.52.53.89v21.543l18.259 10.547V32.56l-52.18 30.12Zm0 0"
      />
      <path
        fill="#b8bcc4"
        d="m53.738 95.676-18.664-10.79-18.261 10.552 47.601 27.492V62.68L12.25 32.559v54.976l18.254-10.543V55.45c.008-.37.207-.71.527-.89a1.04 1.04 0 0 1 1.04-.008l22.179 12.8a2.095 2.095 0 0 1 1.043 1.813v25.598c-.004.37-.2.71-.52.902-.316.188-.71.191-1.035.012"
      />
      <path
        fill="#e2e5ea"
        d="M68.988 5.07v21.086l18.657 10.77c.32.187.511.531.511.906 0 .371-.195.711-.511.898L65.469 51.54a2.12 2.12 0 0 1-2.09 0L41.21 38.73a1.033 1.033 0 0 1-.516-.898 1.038 1.038 0 0 1 .516-.906l18.652-10.77V5.07L12.25 32.56l52.164 30.12 52.176-30.12Zm0 0"
      />
    </svg>
  );
}

/** Official C# logo mark. */
function CSharpLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#9B4F96"
        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
      />
      <path
        fill="#68217A"
        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
      />
      <path
        fill="#fff"
        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
      />
    </svg>
  );
}

/** Official Java (coffee cup) logo mark. */
function JavaLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#0074BD"
        d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
      />
      <path
        fill="#EA2D2E"
        d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
      />
      <path
        fill="#0074BD"
        d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
      />
      <path
        fill="#EA2D2E"
        d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
      />
      <path
        fill="#0074BD"
        d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
      />
    </svg>
  );
}

/** Gradle elephant mark, recoloured for a transparent background on a dark theme. */
function GradleLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#4fd1c5"
        d="M99.5 112.5H85.3c-.5 0-.8-.2-1.1-.5-3.2-4-6.7-7.7-10.9-10.6-2.1-1.5-4.3-2.8-6.8-3.5-2-.6-4.1-.9-6.2-.4-2.1.5-3.9 1.7-5.4 3.2-1.9 1.9-3.2 4.2-4.2 6.7-.6 1.5-1.1 3-1.6 4.5-.1.2-.1.4-.2.6H37.5c-.1-.6-.2-1.2-.3-1.9-.4-2-1-4-2-5.8-.7-1.4-1.6-2.6-2.8-3.6-1.3-1.1-2.8-1.7-4.5-1.7-1.3 0-2.4.5-3.5 1.2-1.5 1-2.7 2.3-3.6 3.8-1.4 2.2-2.2 4.7-2.9 7.2-.1.2-.1.5-.2.8H2.8c-.1-.7-.2-1.5-.3-2.2-.5-4.7-.8-9.4-.7-14.1.1-5.5.7-10.9 2-16.3C5 75 6.7 70.4 9.3 66.2c3.6-5.7 8.4-9.8 14.7-12.3.2-.1.3-.1.5-.2h.2l.3.6c1.8 4 3.7 7.9 6 11.5 1.4 2.3 3.4 4 5.9 4.8 2.7.9 5.3.6 7.9-.5 2.3-1 4.2-2.5 6-4.2 2.1-2 3.8-4.2 5.5-6.6.1-.1.1-.2.1-.3-.2.2-.4.4-.7.6-2.5 2.5-5.2 4.7-8.3 6.4-1.5.9-3.2 1.6-4.9 1.9-2.5.5-4.8.2-6.8-1.6-.8-.7-1.4-1.5-2-2.3-3-4.7-5.6-9.6-8-14.6-.5-1-.9-2-1-3.2-.2-1.7.3-3.2 1.5-4.5.9-.9 1.9-1.6 3.1-2.2 2.2-1.1 4.5-1.9 6.8-2.7 3.4-1.1 6.9-1.9 10.5-2.4 4.1-.6 8.3-.7 12.5-.2 9 .9 17 4.2 24.3 9.5 2.5 1.8 5.1 3.3 8.1 4.2 11.9 3.8 21.4-4.4 23.6-12.8.6-2.3.8-4.6-.1-6.8-1.3-3.4-3.6-6-7.3-7-2.8-.7-5.5-.4-8.1 1-.5.3-1 .5-1.5.7-1.2.4-2 .1-2.6-1-.8-1.4-1.4-2.8-2.1-4.3-.3-.6-.2-1.1.1-1.6.3-.7.8-1.2 1.4-1.7 1.5-1.2 3.3-2 5.3-2.4 4.9-1.1 9.5-.4 13.9 1.8 3.5 1.7 6.2 4.3 8.2 7.7 1.9 3.2 3.2 6.6 3.8 10.3.4 2.9.4 5.7.1 8.6-.6 5-2 9.7-4 14.3-2.6 6-5.6 11.8-9.3 17.2-1.8 2.6-3.7 5.1-5.5 7.6-1.9 2.7-3.8 5.4-5.2 8.4-1.9 3.9-3 7.9-3.4 12.2-.3 3.7-.1 7.3.5 11 .1.6.2 1 .2 1.4zm-8.2-51.4c.3 2.4-.5 4-2.7 4.9-1.6.6-3.6.1-4.6-1.3-1.6-2.1-1.1-4 .7-5.8-1.8-.6-3.6-1.2-5.3-1.7-.4 1-.6 2.5-.5 3.7.2 2.4 1.1 4.4 3.1 5.7 2.1 1.4 4.5 2 7 1.5 2.6-.5 4.6-2 6-4.2.3-.4.5-.8.5-1.4-1.4-.4-2.8-.9-4.2-1.4z"
      />
    </svg>
  );
}

/** Official Godot Engine logo mark. */
function GodotLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#fff"
        d="M114.906 84.145s-.172-1.04-.27-1.028l-18.823 1.817a3.062 3.062 0 00-2.77 2.84l-.516 7.413-14.566 1.04-.988-6.72a3.089 3.089 0 00-3.04-2.62H54.067a3.089 3.089 0 00-3.039 2.62l-.988 6.72-14.566-1.04-.516-7.414a3.058 3.058 0 00-2.77-2.84l-18.835-1.816c-.094-.012-.168 1.028-.266 1.028l-.024 4.074 15.954 2.574.52 7.477a3.084 3.084 0 002.843 2.847l20.059 1.434c.078.004.152.008.226.008a3.087 3.087 0 003.031-2.621l1.02-6.915h14.57l1.02 6.915a3.088 3.088 0 003.254 2.613l20.062-1.434a3.084 3.084 0 002.844-2.847l.52-7.477 15.945-2.586z"
      />
      <path
        fill="#478cbf"
        d="M13.086 53.422v30.723c.059 0 .113.003.168.007L32.09 85.97a2.027 2.027 0 011.828 1.875l.582 8.316 16.426 1.172 1.133-7.672a2.03 2.03 0 012.007-1.734h19.868a2.03 2.03 0 012.007 1.734l1.133 7.672 16.43-1.172.578-8.316a2.027 2.027 0 011.828-1.875l18.828-1.817c.055-.004.11-.007.168-.007V81.69h.008V53.42c2.652-3.335 5.16-7.019 7.086-10.116-2.941-5.008-6.543-9.48-10.395-13.625a101.543 101.543 0 00-10.316 6.004c-1.64-1.633-3.484-2.965-5.3-4.36-1.782-1.43-3.79-2.48-5.696-3.703.566-4.223.848-8.379.96-12.719-4.913-2.476-10.155-4.113-15.456-5.293-2.117 3.559-4.055 7.41-5.738 11.176-2-.332-4.008-.457-6.02-.48V20.3c-.016 0-.027.004-.039.004s-.023-.004-.04-.004v.004c-2.01.023-4.019.148-6.019.48-1.683-3.765-3.62-7.617-5.738-11.176-5.3 1.18-10.543 2.817-15.457 5.293.113 4.34.395 8.496.961 12.72-1.906 1.222-3.914 2.273-5.695 3.702-1.813 1.395-3.66 2.727-5.301 4.36a101.543 101.543 0 00-10.316-6.004C12.543 33.824 8.94 38.297 6 43.305c2.313 3.629 4.793 7.273 7.086 10.117z"
      />
      <path
        fill="#478cbf"
        d="M98.008 89.84l-.582 8.36a2.024 2.024 0 01-1.88 1.878l-20.062 1.434c-.046.004-.097.004-.144.004-.996 0-1.86-.73-2.004-1.73l-1.152-7.806H55.816l-1.152 7.805a2.026 2.026 0 01-2.148 1.727l-20.063-1.434a2.024 2.024 0 01-1.879-1.879l-.582-8.36-16.937-1.632c.008 1.82.03 3.816.03 4.211 0 17.887 22.692 26.484 50.88 26.582h.07c28.188-.098 50.871-8.695 50.871-26.582 0-.402.024-2.39.031-4.211z"
      />
      <path
        fill="#fff"
        d="M48.652 65.895c0 6.27-5.082 11.351-11.351 11.351-6.266 0-11.348-5.082-11.348-11.351 0-6.266 5.082-11.344 11.348-11.344 6.27 0 11.351 5.078 11.351 11.344"
      />
      <path
        fill="#414042"
        d="M45.922 66.566a7.531 7.531 0 01-7.535 7.532 7.534 7.534 0 01-7.535-7.532 7.534 7.534 0 017.535-7.53 7.531 7.531 0 017.535 7.53"
      />
      <path
        fill="#fff"
        d="M64 78.277c-2.02 0-3.652-1.488-3.652-3.32v-10.45c0-1.831 1.632-3.32 3.652-3.32 2.016 0 3.656 1.489 3.656 3.32v10.45c0 1.832-1.64 3.32-3.656 3.32m15.348-12.382c0 6.27 5.082 11.351 11.351 11.351 6.266 0 11.348-5.082 11.348-11.351 0-6.266-5.082-11.344-11.348-11.344-6.27 0-11.351 5.078-11.351 11.344"
      />
      <path
        fill="#414042"
        d="M82.078 66.566a7.53 7.53 0 007.531 7.532 7.531 7.531 0 100-15.063 7.53 7.53 0 00-7.53 7.531"
      />
    </svg>
  );
}

/** GDScript mark: Godot-blue code brackets with a slash. */
function GDScriptLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="#6db3f2"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M42 36 14 64l28 28" />
      <path d="M86 36l28 28-28 28" />
      <path d="M73 26 55 102" stroke="#478CBF" />
    </svg>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A studio run by one person, end to end"
        description="Unlike a typical team-based studio, every part of the process is handled by a single developer from the first idea to the final release build."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Built as a creative space",
            body: "BadutZY Studio exists to explore ideas freely, without being tied to a large team structure, while still holding the same standard of quality and dedication as any other studio.",
          },
          {
            title: "One clear vision",
            body: "Working solo has its challenges, but it means every decision, every mechanic, and every detail in a project reflects a single, consistent creative direction.",
          },
          {
            title: "Small scope, careful execution",
            body: "The focus is on games that are simple in scope but well thought out in execution, with room to grow as more projects and experience are added over time.",
          },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <MagicCard
              as="article"
              className="h-full rounded-xl border border-border bg-surface p-7"
            >
              <span className="font-display text-sm font-bold text-gold">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </MagicCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function VisionMission() {
  const items = [
    {
      icon: Compass,
      label: "Vision",
      body: "To grow into a personal creative space that can consistently produce original and polished games, one project at a time.",
    },
    {
      icon: Target,
      label: "Mission",
      body: "To build games independently with care and attention to detail, and to keep improving with every project released.",
    },
  ];

  return (
    <Section id="vision">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div>
            <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              Vision &amp; Mission
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold sm:text-4xl">
              Direction over speed, craft over volume
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every release is treated as a step forward, a chance to sharpen the craft rather than
              inflate a catalogue.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={0.08 * (i + 1)}>
              <MagicCard className="flex gap-5 rounded-xl border border-border bg-surface p-7">
                <motion.span
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-gold/40 bg-background text-gold"
                >
                  <it.icon className="h-5 w-5" />
                </motion.span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{it.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                </div>
              </MagicCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function GameModal({ game, onClose }: { game: GameDetail | null; onClose: () => void }) {
  useEffect(() => {
    if (!game) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [game, onClose]);

  return (
    <AnimatePresence>
      {game && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center p-4 sm:p-6"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.button
            type="button"
            aria-label="Close details"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-background/80 backdrop-blur-sm"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={game.title}
            className="relative z-10 flex max-h-[78vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            variants={{
              hidden: { opacity: 0, y: 28, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`relative grid aspect-[16/7] shrink-0 place-items-center overflow-hidden border-b border-border/70 ${
                game.image ? "" : "grid-backdrop"
              }`}
            >
              {game.image ? (
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <img src="/badutzy-logo.png" alt="" aria-hidden className="h-14 w-14 opacity-30" />
              )}
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {statusLabel[game.status]}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-border bg-background/80 text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7">
              <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {game.tagline}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{game.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{game.summary}</p>

              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {game.meta.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="rounded-xl border border-border bg-background p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.12 + i * 0.06, ease: "easeOut" }}
                  >
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {m.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{m.value}</dd>
                  </motion.div>
                ))}
              </dl>

              {game.link ? (
                <a
                  href={game.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-foreground transition-all hover:-translate-y-0.5"
                >
                  Visit Project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Maps the "Engine" value in a game's meta (src/data/games.ts) to its logo.
const engineLogos: Record<string, ComponentType<{ className?: string }>> = {
  Unity: UnityLogo,
  Java: JavaLogo,
  Godot: GodotLogo,
};

function getEngine(game: GameDetail) {
  const name = game.meta.find((m) => m.label === "Engine")?.value;
  const Logo = name ? engineLogos[name] : undefined;
  return name && Logo ? { name, Logo } : null;
}

export function Games() {
  const [active, setActive] = useState<GameDetail | null>(null);

  return (
    <Section id="games">
      <SectionHeading
        eyebrow="Games"
        title="Projects in the making"
        description="These are some of the results of the games created so far."
      />
      {/* Cards stay centered as a group; new cards are appended to the right
          of the row, so the layout stays balanced at any count. */}
      <div className="mt-14 flex flex-wrap justify-center gap-6">
        {games.map((g, i) => (
          <Reveal
            key={g.id}
            delay={i * 0.08}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <MagicCard
              as="article"
              className="flex h-full flex-col overflow-hidden rounded-xl border border-dashed border-border bg-surface"
            >
              <div
                className={`relative grid aspect-video place-items-center overflow-hidden border-b border-border/70 ${
                  g.image ? "" : "grid-backdrop"
                }`}
              >
                {g.image ? (
                  <motion.img
                    src={g.image}
                    alt={g.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                ) : (
                  <img
                    src="/badutzy-logo.png"
                    alt=""
                    aria-hidden
                    className="h-14 w-14 opacity-25"
                  />
                )}
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {statusLabel[g.status]}
                </span>
                {(() => {
                  const engine = getEngine(g);
                  if (!engine) return null;
                  return (
                    <motion.span
                      title={`Built with ${engine.name}`}
                      role="img"
                      aria-label={`Built with ${engine.name}`}
                      whileHover={{ scale: 1.12, y: -2 }}
                      transition={{ type: "spring", stiffness: 320, damping: 20 }}
                      className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-xl border border-border bg-background/85 p-1.5 shadow-lg shadow-black/30 backdrop-blur-sm"
                    >
                      <engine.Logo className="h-full w-full" />
                    </motion.span>
                  );
                })()}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-base font-semibold">{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.blurb}</p>
                <div className="mt-auto grid grid-cols-1 gap-2.5 pt-5">
                  <motion.button
                    type="button"
                    onClick={() => setActive(g)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:border-gold/50 hover:text-gold"
                  >
                    View details
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </motion.button>
                  {g.link ? (
                    <motion.a
                      href={g.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-foreground"
                    >
                      Visit Project
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </motion.a>
                  ) : null}
                </div>
              </div>
            </MagicCard>
          </Reveal>
        ))}
      </div>
      <GameModal game={active} onClose={() => setActive(null)} />
    </Section>
  );
}

const stages = [
  {
    icon: Lightbulb,
    name: "Concept",
    body: "Coming up with the core idea, theme, and scope of a project.",
  },
  { icon: PenTool, name: "Design", body: "Planning mechanics, levels, and overall game feel." },
  {
    icon: Terminal,
    name: "Development",
    body: "Programming the game using the chosen engine and tools.",
  },
  {
    icon: FlaskConical,
    name: "Testing",
    body: "Playtesting and refining the game before release.",
  },
  { icon: Rocket, name: "Release", body: "Publishing the finished game to the intended platform." },
];

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="How This Studio Works"
        title="A five-stage solo pipeline"
        description="There is no traditional team pipeline here. Each project moves through these stages, all handled individually."
      />
      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {stages.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.06}>
            <MagicCard
              as="li"
              className="flex h-full flex-col rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background text-gold"
                >
                  <s.icon className="h-5 w-5" />
                </motion.span>
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </MagicCard>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

type StackTool = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  category: string;
  level: string;
  color: string;
  body: string;
};

type StackGroup = {
  id: string;
  title: string;
  subtitle: string;
  icon: ComponentType<{ className?: string }>;
  tools: StackTool[];
};

const stackGroups: StackGroup[] = [
  {
    id: "unity",
    title: "Unity Toolchain",
    subtitle: "Used for Unity-built titles like TwinParkour.",
    icon: Gamepad2,
    tools: [
      {
        name: "Unity",
        icon: UnityLogo,
        category: "Game Engine",
        level: "Primary",
        color: "#e2e8f0",
        body: "A cross-platform game engine used to build gameplay, physics, rendering, and scenes for Windows-based titles.",
      },
      {
        name: "C#",
        icon: CSharpLogo,
        category: "Scripting Language",
        level: "Primary",
        color: "#9b4f96",
        body: "The primary scripting language for Unity, used to write gameplay logic, UI behavior, and custom editor tools.",
      },
    ],
  },
  {
    id: "java",
    title: "Java Toolchain",
    subtitle: "Used for custom Java-engine titles like TrashCollector.",
    icon: Coffee,
    tools: [
      {
        name: "Java",
        icon: JavaLogo,
        category: "Game Engine",
        level: "Primary",
        color: "#0074bd",
        body: "A general-purpose programming language used to build a game's engine, logic, and rendering entirely from scratch, without Unity.",
      },
      {
        name: "Gradle",
        icon: GradleLogo,
        category: "Build System",
        level: "Automation",
        color: "#4fd1c5",
        body: "A build automation tool that compiles code, manages dependencies, and packages everything into a finished Windows build.",
      },
    ],
  },
  {
    id: "godot",
    title: "Godot Toolchain",
    subtitle: "Used for Godot-built titles like Super Pixel Bros.",
    icon: Blocks,
    tools: [
      {
        name: "Godot",
        icon: GodotLogo,
        category: "Game Engine",
        level: "Primary",
        color: "#478CBF",
        body: "A free, open-source game engine with a lightweight scene-and-node architecture, used for 2D titles and exported to Windows, Linux, macOS, and Android.",
      },
      {
        name: "GDScript",
        icon: GDScriptLogo,
        category: "Scripting Language",
        level: "Primary",
        color: "#6db3f2",
        body: "A Python-like scripting language built specifically for Godot, used to write gameplay logic, signals, and UI behavior with minimal boilerplate.",
      },
    ],
  },
];

const allTools = stackGroups.flatMap((g) => g.tools);

const stackReasons = [
  {
    icon: Zap,
    title: "Rapid Prototyping",
    body: "New ideas go from concept to playable build in days, not weeks.",
  },
  {
    icon: Layers,
    title: "Full Creative Control",
    body: "One person owns every layer, design, code, and art direction.",
  },
  {
    icon: Monitor,
    title: "Windows-First",
    body: "Every build targets Windows 10/11, with Godot titles also reaching Linux, macOS, and Android.",
  },
  {
    icon: Rocket,
    title: "Lightweight Pipeline",
    body: "A lean toolchain, with zero unnecessary overhead between prototype and release.",
  },
];

function StackNode({
  tool,
  active,
  onSelect,
}: {
  tool: StackTool;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className="group flex flex-col items-center gap-3 focus:outline-none"
    >
      <motion.span
        animate={{ scale: active ? 1.1 : 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
        style={{
          boxShadow: active
            ? `0 0 0 1px color-mix(in oklab, ${tool.color} 55%, transparent)`
            : "0 0 0 1px var(--color-border)",
        }}
        className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-transparent sm:h-[4.5rem] sm:w-[4.5rem]"
      >
        {active ? (
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full blur-xl"
            style={{ background: tool.color }}
            animate={{ opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : null}
        {/* Logo sits directly on the transparent node - no background chip */}
        <motion.span
          animate={{ opacity: active ? 1 : 0.55 }}
          transition={{ duration: 0.2 }}
          className="grid h-9 w-9 shrink-0 place-items-center sm:h-10 sm:w-10"
        >
          <tool.icon className="h-full w-full" />
        </motion.span>
      </motion.span>
      <span
        className={`text-xs font-semibold tracking-wide transition-colors sm:text-sm ${
          active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
        }`}
      >
        {tool.name}
      </span>
    </button>
  );
}

export function TechStack() {
  const [active, setActive] = useState("Unity");
  const tool = allTools.find((t) => t.name === active) ?? allTools[0]!;

  return (
    <Section id="stack">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Built entirely for game development"
        description="Three focused toolchains, each purpose-built for shipping a specific kind of game, from Windows-first builds to cross-platform releases."
      />

      {/* Three independent toolchains - each engine paired only with the tools it actually depends on */}
      <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group, gi) => (
          <Reveal
            key={group.id}
            delay={gi * 0.08}
            className={
              gi === stackGroups.length - 1 && stackGroups.length % 2 === 1
                ? "sm:col-span-2 lg:col-span-1"
                : ""
            }
          >
            <div className="h-full rounded-2xl border border-border bg-surface/60 p-6 sm:p-7">
              <div className="flex items-center gap-2 text-gold">
                <group.icon className="h-4 w-4 shrink-0" />
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em]">
                  {group.title}
                </h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{group.subtitle}</p>

              <div className="mt-7 flex items-center justify-center gap-3 sm:gap-4">
                {group.tools.map((t, i) => (
                  <Fragment key={t.name}>
                    {i > 0 ? (
                      <div className="relative h-px w-10 shrink-0 bg-border/70 sm:w-14">
                        <motion.span
                          aria-hidden
                          className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-gold shadow-[0_0_8px_var(--gold)]"
                          initial={{ left: "0%" }}
                          animate={{ left: ["0%", "100%"] }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                    ) : null}
                    <StackNode
                      tool={t}
                      active={active === t.name}
                      onSelect={() => setActive(t.name)}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Detail panel: crossfades to describe whichever tool is selected */}
      <Reveal delay={0.16} className="mx-auto mt-6 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-transparent p-1.5"
                  style={{
                    boxShadow: `0 0 0 1px color-mix(in oklab, ${tool.color} 45%, transparent)`,
                  }}
                >
                  <tool.icon className="h-full w-full" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{tool.name}</h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {tool.category}
                  </p>
                </div>
              </div>
              <span
                className="rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
                style={{
                  borderColor: `color-mix(in oklab, ${tool.color} 45%, transparent)`,
                  color: tool.color,
                }}
              >
                {tool.level}
              </span>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {tool.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </Reveal>

      {/* Supporting reasons: short, credible payoffs of this stack */}
      <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stackReasons.map((r, i) => (
          <Reveal key={r.title} delay={0.06 * i}>
            <MagicCard className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-gold/30 bg-background text-gold">
                <r.icon className="h-4 w-4" />
              </span>
              <h4 className="text-sm font-semibold">{r.title}</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">{r.body}</p>
            </MagicCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/rzky.mp_36/" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@badutzy" },
  { icon: Github, label: "GitHub", href: "https://github.com/BadutZY" },
];

// Links for the studio/organization itself, shown in the site footer.
// TODO: replace the Website href below with BadutZY Studio's official domain once ready.
export const orgLinks = [
  { icon: Globe, label: "Website", href: "https://badutzy-studio.vercel.app" },
  { icon: Github, label: "GitHub", href: "https://github.com/BadutZY-Studio" },
];

export function Founder() {
  return (
    <Section id="founder">
      <SectionHeading
        eyebrow="Founder"
        title="BadutZY"
        description="Founder, developer, designer, and everything else. BadutZY Studio is a one-person operation run entirely by BadutZY."
      />
      <Reveal delay={0.1}>
        <MagicCard className="mx-auto mt-12 grid max-w-3xl gap-8 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center sm:p-10">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl border border-gold/40 bg-background">
            <img src="/BadutZY.png" alt="BadutZY Studio emblem" className="h-16 w-16" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-xl font-bold">BadutZY</h3>
            <p className="mt-1 text-sm text-gold">Founder &amp; Solo Developer</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Handles concept, design, programming, art direction, and release for every project
              under the studio. Also builds web experiences and community tooling on the side.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: Globe, label: "Website", href: "https://badutzy.vercel.app/" },
                { icon: Github, label: "GitHub", href: "https://github.com/BadutZY" },
                { icon: TwitterXIcon, label: "X", href: "https://x.com/BadutZYY_" },
                ...socials.filter((s) => s.label !== "GitHub"),
                {
                  icon: ModrinthIcon,
                  label: "Modrinth",
                  href: "https://modrinth.com/user/BadutZY",
                },
                {
                  icon: CurseforgeIcon,
                  label: "CurseForge",
                  href: "https://www.curseforge.com/members/badutzy/",
                },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-medium hover:border-gold/60 hover:text-gold"
                >
                  <s.icon className="h-4 w-4 shrink-0" /> {s.label}
                </motion.a>
              ))}
            </div>
          </div>
        </MagicCard>
      </Reveal>
    </Section>
  );
}

export function SiteFooter() {
  return (
    <Reveal>
      <footer className="border-t border-border py-12">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="flex min-w-0 items-center gap-3">
            <img src="/badutzy-logo.png" alt="" aria-hidden className="h-9 w-9 shrink-0" />
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-bold">BadutZY Studio</p>
              <p className="text-xs text-muted-foreground">Built alone, made with dedication.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {orgLinks.map((s) => (
              <Magnetic key={s.label} strength={0.4}>
                <motion.a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface hover:border-gold/60 hover:text-gold"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              </Magnetic>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-8 w-full max-w-6xl px-5 text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} BadutZY Studio. All rights reserved.
        </p>
      </footer>
    </Reveal>
  );
}