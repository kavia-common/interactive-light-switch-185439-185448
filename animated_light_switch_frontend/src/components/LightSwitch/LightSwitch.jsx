import React, { useEffect, useRef } from 'react';
import styles from './LightSwitch.module.css';

// PUBLIC_INTERFACE
export default function LightSwitch({ checked, onChange, id = 'light-switch' }) {
  /**
   * Accessible, animated light switch component.
   * - Keyboard: Space/Enter toggles.
   * - ARIA: role="switch", aria-checked reflects state, and focus styling provided.
   * - Visuals: smooth toggle, glow, and dynamic shadows.
   */
  const knobRef = useRef(null);

  const toggle = () => {
    if (typeof onChange === 'function') onChange(!checked);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  // subtle pulse start/stop tied to state for reduced motion users
  useEffect(() => {
    if (!knobRef.current) return;
    const el = knobRef.current;
    if (checked) {
      el.classList.add(styles.pulse);
    } else {
      el.classList.remove(styles.pulse);
    }
  }, [checked]);

  return (
    <div className={styles.wrapper}>
      <div
        id={id}
        className={`${styles.switch} ${checked ? styles.on : styles.off}`}
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onClick={toggle}
        onKeyDown={onKeyDown}
        aria-label={checked ? 'Lights on. Toggle to turn off' : 'Lights off. Toggle to turn on'}
      >
        <div className={styles.track}>
          <div className={styles.gradientGlow} aria-hidden="true" />
          <div className={styles.shadow} aria-hidden="true" />
          <div ref={knobRef} className={styles.knob}>
            <span className={styles.knobIcon} aria-hidden="true">
              {checked ? '💡' : '⏻'}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.hint} role="note">
        Press Space or Enter to toggle
      </div>
    </div>
  );
}
