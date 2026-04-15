// class-data.js — All class feature data for Sol Experience character sheet.
// Edit this file to update class descriptions, add features, or add new classes.
// The renderer in class-tabs.js reads this and generates the class tab HTML.
//
// Feature item shapes:
//   { type:'heading', text, minLevel?, subclass? }  — <div class="sec-heading">
//   { type:'subclass-picker', minLevel? }            — subclass button row
//   { type:'raw', html, minLevel?, subclass? }       — arbitrary HTML block
//   { name, levelLabel, minLevel?, subclass?,        — standard feature card
//     desc (HTML string), uses?: { inputs:[], note } }

/* eslint-disable quotes */
const CLASS_DATA = {

  // ─────────────────────────────────────────────────────────────
  //  MARINE
  // ─────────────────────────────────────────────────────────────
  marine: {
    name: 'Marine',
    subclassInputName: 'marine-subclass',
    subclassLevel: 3,
    subclassTitle: 'Combat Doctrine — Subclass',
    subclasses: [
      { key: 'demolitionist', label: 'Demolitionist' },
      { key: 'sniper',        label: 'Sniper' },
      { key: 'heavy-gunner',  label: 'Heavy Gunner' },
    ],
    trackerHeading: 'Momentum Tracker',
    trackers: [
      { name: 'marine-mp-max',      label: 'MP Max',       type: 'number' },
      { name: 'marine-mp-cur',      label: 'MP Current',   type: 'number' },
      { name: 'marine-combat-style',label: 'Combat Style', type: 'text'   },
    ],
    features: [
      { type: 'heading', text: 'Core Class Feature' },
      {
        name: 'Combat Momentum', levelLabel: 'Core · d10 HD · STR &amp; CON saves',
        desc: `
          <p><strong>Max MP:</strong> Proficiency Bonus + CON modifier (min 1) · Resets at end of combat or 1 min without hostile activity</p>
          <p><strong>Gaining MP:</strong> Hit a creature — max 1/turn · Take damage — max 1/turn · Reduce creature to 0 HP — gain 2 MP</p>
          <p><strong>Spending:</strong> Once per attack and once per non-attack action on your turn</p>
          <p><strong>Momentum Options:</strong></p>
          <ul>
            <li><strong>1 MP — Quick Reload:</strong> Reload or swap weapons without using an action</li>
            <li><strong>2 MP — Push Through:</strong> Move up to your speed without provoking opportunity attacks</li>
            <li><strong>2 MP — Precision Burst:</strong> +2 to hit, or bonus damage equal to your Proficiency Bonus</li>
            <li><strong>3 MP — Suppression:</strong> On hit, target has disadvantage on its next attack roll before end of its next turn</li>
            <li><strong>4 MP — Overdrive:</strong> Gain one extra bonus action this turn (reload, swap, Brace, or activate a Marine feature)</li>
          </ul>`,
      },

      { type: 'heading', text: 'Level Progression' },
      {
        name: 'Combat Style', levelLabel: 'Level 1',
        desc: `
          <p>Choose one fighting style:</p>
          <ul>
            <li><strong>Close Quarters:</strong> +1 AC · +2 to attack rolls against creatures within 5 ft</li>
            <li><strong>Marksman:</strong> +2 to attack rolls with ranged weapons · ranged attacks ignore half cover</li>
            <li><strong>Heavy Gunner:</strong> Reduce recoil penalties by 2 (min 0) · bonus damage = Proficiency Bonus with heavy weapons</li>
            <li><strong>Breacher:</strong> Double damage to objects &amp; structures · first round of combat: weapon attacks deal +PB bonus damage</li>
          </ul>`,
      },
      {
        name: 'Action Surge', levelLabel: 'Level 2', minLevel: 2,
        desc: `<p>On your turn, take one additional action.</p>`,
        uses: { inputs: ['marine-as1','marine-as2'], note: '/ short or long rest &nbsp;(2 uses at Level 17)' },
      },
      { type: 'subclass-picker', minLevel: 3 },
      {
        name: 'Extra Attack', levelLabel: 'Level 5', minLevel: 5,
        desc: `<p>Attack twice when you take the Attack action.</p>`,
      },
      {
        name: 'Tactical Reflexes', levelLabel: 'Level 6', minLevel: 6,
        desc: `<ul><li>Advantage on Initiative rolls</li><li>Cannot be surprised while conscious unless incapacitated</li></ul>`,
      },
      {
        name: 'Combat Resilience', levelLabel: 'Level 9', minLevel: 9,
        desc: `<p>Once per turn when you take damage, reduce it by your Constitution modifier.</p>`,
      },
      {
        name: 'Extra Attack (2)', levelLabel: 'Level 11', minLevel: 11,
        desc: `<p>Attack three times when you take the Attack action.</p>`,
      },
      {
        name: 'Indomitable', levelLabel: 'Level 13', minLevel: 13,
        desc: `<p>Reroll a failed saving throw. Uses: 1 at L13 · 2 at L17 · 3 at L20</p>`,
        uses: { inputs: ['marine-ind1','marine-ind2','marine-ind3'], note: '/ long rest' },
      },
      {
        name: 'Apex Soldier', levelLabel: 'Level 18', minLevel: 18,
        desc: `<ul><li>Critical hit on a roll of 19–20</li><li>Start of your turn below half max HP: gain 1 MP</li></ul>`,
      },
      {
        name: 'War Machine Protocol', levelLabel: 'Level 20', minLevel: 20,
        desc: `<p>For 1 minute: resistance to all damage from attacks · start of each turn regain 2 MP · end of each turn make one weapon attack or move half speed without provoking OAs.</p>`,
        uses: { inputs: ['marine-wmp1'], note: '/ long rest' },
      },

      // Demolitionist
      { type: 'heading', text: 'Demolitionist', subclass: 'demolitionist' },
      {
        name: 'Explosive Expert', levelLabel: 'Level 3', minLevel: 3, subclass: 'demolitionist',
        desc: `<ul>
          <li>Grenades and explosive devices deal additional damage equal to your Proficiency Bonus</li>
          <li>Once on each of your turns, throw a grenade as a bonus action</li>
        </ul>`,
      },
      {
        name: 'Chain Reaction', levelLabel: 'Level 7', minLevel: 7, subclass: 'demolitionist',
        desc: `<p>When one of your explosives deals damage, cause a secondary blast: one creature within 5 ft of the original target takes damage equal to your Proficiency Bonus. Limit: once per turn.</p>`,
      },
      {
        name: 'Breach Specialist', levelLabel: 'Level 10', minLevel: 10, subclass: 'demolitionist',
        desc: `<ul>
          <li>Your attacks ignore cover provided by objects and structures</li>
          <li>Bonus damage equal to your Proficiency Bonus against vehicles, external ship systems, and structures</li>
        </ul>`,
      },
      {
        name: 'Controlled Detonation', levelLabel: 'Level 15', minLevel: 15, subclass: 'demolitionist',
        desc: `<ul>
          <li>Allies take no damage from your explosives</li>
          <li>Allies automatically succeed on saving throws against your explosives</li>
        </ul>`,
      },

      // Sniper
      { type: 'heading', text: 'Sniper', subclass: 'sniper' },
      {
        name: 'Target Lock', levelLabel: 'Level 3', minLevel: 3, subclass: 'sniper',
        desc: `<p><strong>Bonus action</strong> — Mark one creature you can see. For 1 minute, once per turn when you hit the marked target, deal extra 1d6 damage. Ends if the target drops to 0 HP or you mark a different target.</p>`,
      },
      {
        name: 'Deadeye', levelLabel: 'Level 7', minLevel: 7, subclass: 'sniper',
        desc: `<p>Critical hit range becomes 18–20 against your marked target.</p>`,
      },
      {
        name: 'Ghost Positioning', levelLabel: 'Level 10', minLevel: 10, subclass: 'sniper',
        desc: `<p>While hidden, a ranged attack with a suppressed firearm or in a vacuum does not automatically reveal your position. After the attack, make a Stealth check to remain hidden (advantage if you moved half speed or less).</p>
        <p><strong>Uses:</strong> DEX modifier per long rest (min 1)</p>`,
      },
      {
        name: 'Kill Shot', levelLabel: 'Level 15', minLevel: 15, subclass: 'sniper',
        desc: `<p>Once per turn when you hit with a weapon attack:</p>
        <ul>
          <li><strong>Target below 50% max HP:</strong> +4d8 damage, ignores resistance</li>
          <li><strong>Target below 25% max HP:</strong> Double weapon damage dice instead</li>
        </ul>
        <p>If this reduces the target to 0 HP, gain 2 MP. <strong>Uses:</strong> Proficiency Bonus per long rest</p>`,
      },

      // Heavy Gunner
      { type: 'heading', text: 'Heavy Gunner', subclass: 'heavy-gunner' },
      {
        name: 'Suppressive Fire', levelLabel: 'Level 3', minLevel: 3, subclass: 'heavy-gunner',
        desc: `<p>Once on each of your turns, when you hit with a heavy weapon attack: target's speed −10 ft and disadvantage on its next attack roll. Spend 2 MP to instead Pin the target (speed 0, no reactions) until end of its next turn.</p>
        <p><em>Pinned:</em> speed 0, cannot take reactions, ends at end of creature's next turn.</p>`,
      },
      {
        name: 'Area Denial', levelLabel: 'Level 7', minLevel: 7, subclass: 'heavy-gunner',
        desc: `<p><strong>Action</strong> — Choose a 15-ft cone or 30-ft line. One attack roll at −2 vs all creatures in area. Consumes 10 rounds of ammunition.</p>
        <ul>
          <li><strong>Hit:</strong> Full weapon damage · speed 0 · disadvantage on next attack</li>
          <li><strong>Miss:</strong> Speed −10 ft until end of next turn</li>
        </ul>
        <p>Spend 3 MP: each creature hit makes a STR save (Marine DC) or is Pinned until end of its next turn.</p>`,
      },
      {
        name: 'Unstoppable Fire', levelLabel: 'Level 10', minLevel: 10, subclass: 'heavy-gunner',
        desc: `<p>While Braced with a heavy weapon: resistance to damage from attacks · cannot be knocked prone · cannot be pushed or forcibly moved.</p>
        <p><strong>Brace (bonus action):</strong> Until start of your next turn: +2 AC · heavy weapon attacks deal +PB damage · speed 0. Ends early if you willingly move.</p>`,
      },
      {
        name: 'Bullet Storm', levelLabel: 'Level 15', minLevel: 15, subclass: 'heavy-gunner',
        desc: `<p><strong>Action</strong> — Replaces all attacks. Choose up to 5 creatures in weapon range. Separate attack rolls. Consumes 20 rounds.</p>
        <ul>
          <li><strong>Hit:</strong> Weapon damage + 2d8 · STR save (Marine DC) or knocked prone (success: speed 0)</li>
        </ul>
        <p>After use: lose all Momentum · disadvantage on attack rolls until end of your next turn.</p>`,
      },
    ],
    featsHeading: 'Specialist Feats',
    feats: [
      {
        name: 'Tier 1',
        desc: `<ul>
          <li><strong>Quickdraw Specialist:</strong> Draw/stow 2 weapons at once · first attack in combat has advantage</li>
          <li><strong>Tactical Reload:</strong> Reload a weapon as a free action once per turn</li>
          <li><strong>Aggressive Advance:</strong> Move toward a hostile → +1 AC; first hit on that creature this turn deals +PB damage</li>
        </ul>`,
      },
      {
        name: 'Tier 2',
        desc: `<ul>
          <li><strong>Relentless Assault:</strong> Once per turn, reduce a creature to 0 HP → make one weapon attack as a bonus action or gain 2 MP</li>
          <li><strong>Suppression Mastery:</strong> Your suppression effects last 1 additional round</li>
          <li><strong>Armor Breaker:</strong> Once per turn, one weapon attack ignores 2 points of AC or armor value</li>
        </ul>`,
      },
      {
        name: 'Tier 3',
        desc: `<ul>
          <li><strong>Executioner Protocol:</strong> Once per turn, hit a creature below 50% max HP → +2d6 damage</li>
          <li><strong>Warpath:</strong> Each consecutive hit on the same target on your turn deals +2 damage (max +10); resets on miss, different target, or end of turn</li>
          <li><strong>Unkillable:</strong> When reduced to 0 HP but not killed outright, drop to 1 HP and gain max Momentum instead. 1/long rest</li>
        </ul>`,
      },
    ],
    notes: { name: 'marine-notes', placeholder: 'Combat style choice, subclass abilities, etc.' },
  },

  // ─────────────────────────────────────────────────────────────
  //  ENGINEER
  // ─────────────────────────────────────────────────────────────
  engineer: {
    name: 'Engineer',
    subclassInputName: 'eng-subclass',
    subclassLevel: 3,
    subclassTitle: 'Specialization — Subclass',
    subclasses: [
      { key: 'mechanist',          label: 'Mechanist' },
      { key: 'systems-navigator',  label: 'Systems Navigator' },
      { key: 'technical-savant',   label: 'Technical Savant' },
    ],
    trackerHeading: 'Tech Points',
    trackers: [
      { name: 'eng-tp-max',        label: 'TP Max',          type: 'number' },
      { name: 'eng-tp-cur',        label: 'TP Current',      type: 'number' },
      { name: 'eng-overclock-cur', label: 'Overclock Uses',  type: 'number' },
    ],
    features: [
      { type: 'heading', text: 'Core Class Features' },
      {
        name: 'Field Engineer', levelLabel: 'Core · d6 HD · INT &amp; CON saves',
        desc: `<p>Always proficient in Engineering. Advantage on mod installation, removal, and repair checks. Ignore field penalties for technical work without proper facilities.</p>
        <p>Installing or removing a mod: 1 minute outside combat · 1 action in combat.</p>`,
      },
      {
        name: 'Fabrication Protocols', levelLabel: 'Core',
        desc: `<p><strong>During a short rest:</strong> Install or remove Prototype mods automatically · Experimental mod checks made with advantage.</p>
        <p><strong>Mid-Combat Modding (action, 2 TP):</strong> Install, remove, or swap one mod on a weapon, armor, drone, or valid engineered system within reach.</p>`,
      },
      {
        name: 'Rapid Repair', levelLabel: 'Core',
        desc: `<p><strong>Action | 1–3 TP</strong> — Choose one target within reach (weapon, armor, drone, construct, or damaged device). For each TP spent, restore 1d8 HP. If the target doesn't track HP, instead: repair 1 damaged mod · remove Jammed · remove Disabled · or remove Overheated. One target per use.</p>`,
      },

      { type: 'heading', text: 'Level Progression' },
      {
        name: 'Drone Deployment', levelLabel: 'Level 2', minLevel: 2,
        desc: `<p>Deploy one active drone. <strong>Basic Utility Drone:</strong> HP = 5 × Engineer level · AC = 12 + PB · Move 30 ft or fly 20 ft.</p>
        <p><strong>Drone Command (bonus action):</strong> Attack (1d6 + PB), Help, Interact, Dash, or Disengage. If not commanded, defaults to Dodge. Destroyed drone may be rebuilt on a long rest.</p>`,
      },
      {
        type: 'raw', minLevel: 2,
        html: `<div class="kinetic-stats">
          <div class="k-stat"><input type="text" name="eng-drone1-type" placeholder="—"><label>Drone 1 Type</label></div>
          <div class="k-stat"><input type="number" name="eng-drone1-max" min="0" placeholder="—"><label>Drone 1 HP Max</label></div>
          <div class="k-stat"><input type="number" name="eng-drone1-cur" min="0" placeholder="—"><label>Drone 1 HP</label></div>
        </div>`,
      },
      {
        name: 'Network Systems', levelLabel: 'Level 3', minLevel: 3,
        desc: `<p><strong>Network Scanner (bonus action):</strong> Scan for hackable networks within 60 ft. Unshielded/obvious systems visible immediately. Shielded systems require Investigation (DC 10–20+).</p>
        <p><strong>Hacking Access:</strong> Owned systems need no check. Hostile systems require a Hacking check vs system DC (Civilian 10 → Black Site 20+). On success, Access until encounter ends or link breaks.</p>
        <p><strong>Post-Hack Commands (bonus action):</strong> Engineering check vs base DC + modifier. Change Target (+0) · Reload (+0) · Patrol (+0) · Shutdown 2 rounds (+2) · Repair (+2). Self-Destruct unlocked at L15.</p>`,
      },
      { type: 'subclass-picker', minLevel: 3 },
      {
        name: 'Overclock', levelLabel: 'Level 5', minLevel: 5,
        desc: `<p><strong>2 TP</strong> — Gain one additional action this turn usable for: Hacking · Engineering · firing a weapon · directing a system · or another valid class or combat action. Cannot activate Overclock again.</p>`,
        uses: { inputs: ['eng-oc1','eng-oc2','eng-oc3','eng-oc4','eng-oc5','eng-oc6'], note: '/ long rest = Proficiency Bonus' },
      },
      {
        name: 'Efficient Systems', levelLabel: 'Level 6', minLevel: 6,
        desc: `<ul>
          <li>Once on each of your turns, reduce the TP cost of one Engineer ability by 1 (min 1)</li>
          <li>Advantage on Engineering checks</li>
          <li>Expertise in one skill or tool proficiency you already have</li>
        </ul>`,
      },
      {
        name: 'Advanced Repair', levelLabel: 'Level 9', minLevel: 9,
        desc: `<p>Rapid Repair restores additional HP equal to your Intelligence modifier. You may now use Rapid Repair to restore Disabled non-critical systems to working condition.</p>`,
      },
      {
        name: 'Dual Deployment', levelLabel: 'Level 11', minLevel: 11,
        desc: `<p>Control 2 active drones simultaneously. The same bonus action may command both, each taking one action from its drone action list.</p>`,
      },
      {
        type: 'raw', minLevel: 11,
        html: `<div class="kinetic-stats">
          <div class="k-stat"><input type="text" name="eng-drone2-type" placeholder="—"><label>Drone 2 Type</label></div>
          <div class="k-stat"><input type="number" name="eng-drone2-max" min="0" placeholder="—"><label>Drone 2 HP Max</label></div>
          <div class="k-stat"><input type="number" name="eng-drone2-cur" min="0" placeholder="—"><label>Drone 2 HP</label></div>
        </div>`,
      },
      {
        name: 'System Override', levelLabel: 'Level 13', minLevel: 13,
        desc: `<p><strong>Action | 3 TP | 60 ft</strong> — Target a construct, drone, hacked system, or tech-dependent creature. It makes an INT saving throw. On failure, choose one:</p>
        <ul>
          <li>Disable one relevant system until end of its next turn</li>
          <li>Disadvantage on attack rolls and no gear bonuses until end of its next turn</li>
        </ul>`,
      },
      {
        name: 'Master Engineer', levelLabel: 'Level 18', minLevel: 18,
        desc: `<ul>
          <li>Prototype mod installation automatically succeeds</li>
          <li>Experimental mod installation: made with advantage · failure cannot destroy the mod</li>
        </ul>`,
      },
      {
        name: 'Apex Technologist', levelLabel: 'Level 20', minLevel: 20,
        desc: `<p>For 1 minute: unlimited TP · all Engineer abilities cost 0 TP · drones' max HP doubled · use Overclock once per turn without spending TP or a normal use.</p>`,
        uses: { inputs: ['eng-apex1'], note: '/ long rest' },
      },

      // Mechanist
      { type: 'heading', text: 'Mechanist', subclass: 'mechanist' },
      {
        name: 'Enhanced Drone Chassis', levelLabel: 'Level 3', minLevel: 3, subclass: 'mechanist',
        desc: `<p>Your drones gain: attack damage becomes 1d8 + PB · +2 AC.</p>
        <p><strong>Drone Protocols (bonus action):</strong> Choose one protocol for one drone until changed. Assault: +2 damage · Defense: temp HP = PB · Recon: advantage on Perception checks.</p>`,
      },
      {
        name: 'Multi-Strike Drone', levelLabel: 'Level 7', minLevel: 7, subclass: 'mechanist',
        desc: `<p>When you command a drone to Attack, it attacks twice instead of once.</p>`,
      },
      {
        name: 'Specialist Drone Models', levelLabel: 'Level 10', minLevel: 10, subclass: 'mechanist',
        desc: `<p>Choose 2 of the following drone upgrades:</p>
        <ul>
          <li><strong>Shield Drone:</strong> Reaction when ally within 10 ft of drone takes damage — reduce by PB</li>
          <li><strong>Assault Drone:</strong> Drone attacks deal +1d8 damage once per turn</li>
          <li><strong>Recon Drone:</strong> While active, you and allies within 30 ft have advantage on Perception checks to detect hidden targets, devices, or ambushes</li>
        </ul>`,
      },
      {
        name: 'Drone Swarm Control', levelLabel: 'Level 15', minLevel: 15, subclass: 'mechanist',
        desc: `<p>Control 3 active drones simultaneously. Each has 75% of normal max HP (rounded up). The same bonus action commands all 3.</p>`,
      },

      // Systems Navigator
      { type: 'heading', text: 'Systems Navigator', subclass: 'systems-navigator' },
      {
        name: 'Neural Intrusion &amp; Systems Mapping', levelLabel: 'Level 3', minLevel: 3, subclass: 'systems-navigator',
        desc: `<p><strong>Neural Intrusion (bonus action, 1 TP, 60 ft):</strong> Target makes an INT save. On failure: disadvantage on its next attack roll, or −2 AC until start of your next turn.</p>
        <p><strong>Systems Mapping:</strong> Advantage on Hacking checks. Auto-detect obvious and standard unshielded systems within scanner range.</p>`,
      },
      {
        name: 'Exploit Systems', levelLabel: 'Level 7', minLevel: 7, subclass: 'systems-navigator',
        desc: `<p>When you successfully hack a target or affect it with Neural Intrusion, choose one:</p>
        <ul>
          <li>One active mod on the target is suppressed until end of its next turn</li>
          <li>Target cannot restore Shields until end of its next turn</li>
        </ul>`,
      },
      {
        name: 'Multi-Thread Infiltration', levelLabel: 'Level 10', minLevel: 10, subclass: 'systems-navigator',
        desc: `<p>When you take the Hacking action, attempt to hack up to 3 different targets within range. Resolve each separately.</p>`,
      },
      {
        name: 'Total Override', levelLabel: 'Level 15', minLevel: 15, subclass: 'systems-navigator',
        desc: `<p><strong>Action | 4 TP | 60 ft</strong> — Target construct, drone, turret, or hacked system makes an INT save. On failure, you control its next major action for 1 turn: movement · targeting · firing restriction · shutdown · or redirect to new target.</p>`,
      },

      // Technical Savant
      { type: 'heading', text: 'Technical Savant', subclass: 'technical-savant' },
      {
        name: 'Systems Interface &amp; Ship Mastery', levelLabel: 'Level 3', minLevel: 3, subclass: 'technical-savant',
        desc: `<p><strong>Systems Interface:</strong> Advantage on ship checks using Engineering · Sensors/Electronic Warfare · Command.</p>
        <p><strong>Ship Mastery:</strong> Once per round, add INT modifier to one ship action roll. Once per combat, perform one Basic Engineering or Sensors ship action as a bonus action.</p>`,
      },
      {
        name: 'Emergency Systems', levelLabel: 'Level 7', minLevel: 7, subclass: 'technical-savant',
        desc: `<p><strong>Reaction | 2 TP</strong> — When a ship subsystem becomes Impaired or a hazard would apply, immediately choose one: suppress one subsystem's penalties until end of next round · remove one fire, jam, or engine strain · temporarily restore one disabled non-critical system until end of next round.</p>`,
      },
      {
        name: 'Power Redistribution', levelLabel: 'Level 10', minLevel: 10, subclass: 'technical-savant',
        desc: `<p><strong>Bonus action</strong> — Choose one until start of your next turn: Weapons: ship weapon attacks +2 damage · Shields: ship +2 Defense · Engines: ship +1 Speed.</p>`,
      },
      {
        name: 'System Domination', levelLabel: 'Level 15', minLevel: 15, subclass: 'technical-savant',
        desc: `<p><strong>Action | 4 TP</strong> — Choose one allied ship subsystem. Effect lasts 1 round. Weapons: +2 to hit and +PB damage · Shields: +2 Defense and 20 temp Shields · Engines: +1 Speed and +2 on Helm checks · Sensors: +2 on Scan, Lock, Jam, and Burn Through checks.</p>`,
      },
    ],
    featsHeading: 'Specialist Feats',
    feats: [
      {
        name: 'Engineer Feats',
        desc: `<ul>
          <li><strong>Master Fabricator:</strong> Mid-Combat Modding costs 1 TP · may install/remove/swap up to 2 mods at once</li>
          <li><strong>Drone Specialist:</strong> Drones gain HP = Engineer level · drone attacks deal +PB damage</li>
          <li><strong>Overclock Efficiency:</strong> Overclock costs 1 TP · +1 use of Overclock per long rest</li>
          <li><strong>Deep Systems Access:</strong> Advantage on Hacking checks · once per SR/LR, ignore lockout/alarm from one failed Hacking check</li>
          <li><strong>Network Ghost:</strong> +2 on Hacking checks · once per round, a failed command doesn't trigger an alarm</li>
          <li><strong>Experimental Specialist:</strong> Experimental mod checks with advantage · failure can't destroy mod · reduce Experimental DCs by 2</li>
          <li><strong>Remote Override:</strong> Hacking and command range becomes 120 ft · no line of sight needed for already-hacked systems</li>
          <li><strong>System Saboteur:</strong> Shutdown effects last 1 additional round · Self-Destruct DCs you force are reduced by 2</li>
          <li><strong>Parallel Processing:</strong> Once per turn, if you gain Access to a system, issue one post-hack command in the same turn</li>
          <li><strong>Apex Modder:</strong> Choose one weapon and one armor — each gains 1 additional mod slot and +1 mod effectiveness</li>
        </ul>`,
      },
    ],
    notes: { name: 'eng-notes', placeholder: 'Drone stats, active hacks, etc.' },
  },

  // ─────────────────────────────────────────────────────────────
  //  OPERATOR
  // ─────────────────────────────────────────────────────────────
  operator: {
    name: 'Operator',
    subclassInputName: 'op-subclass',
    subclassLevel: 3,
    subclassTitle: 'Combat Protocols — Subclass',
    subclasses: [
      { key: 'tactical-commander',    label: 'Tactical Commander' },
      { key: 'defensive-coordinator', label: 'Defensive Coordinator' },
      { key: 'strategic-controller',  label: 'Strategic Controller' },
    ],
    trackerHeading: 'Command Points',
    trackers: [
      { name: 'op-cp-max',    label: 'CP Max',           type: 'number' },
      { name: 'op-cp-cur',    label: 'CP Current',       type: 'number' },
      { name: 'op-protocol',  label: 'Active Protocol',  type: 'text'   },
    ],
    features: [
      { type: 'heading', text: 'Core Class Features' },
      {
        name: 'Tactical Command', levelLabel: 'Core · d8 HD · INT &amp; CHA saves',
        desc: `<p><strong>Bonus action | 1 CP</strong> — Choose one ally you can communicate with or direct visually. Choose one effect for the next relevant roll before end of that ally's next turn:</p>
        <ul>
          <li><strong>Attack Command:</strong> +2 to hit</li>
          <li><strong>Defense Command:</strong> +2 AC</li>
          <li><strong>Movement Command:</strong> Target may use its reaction to move up to half its speed without provoking OAs</li>
        </ul>
        <p><strong>CP Pool:</strong> 5 + Proficiency Bonus + INT modifier · Full on long rest · ½ on short rest</p>`,
      },
      {
        name: 'Battlefield Analysis', levelLabel: 'Core',
        desc: `<ul>
          <li>Add your INT modifier to initiative rolls</li>
          <li>Cannot be surprised while conscious unless incapacitated</li>
          <li>At the start of combat, swap initiative with one willing ally you can perceive</li>
        </ul>`,
      },
      {
        name: 'Weak Point Exploitation', levelLabel: 'Core',
        desc: `<p>Once per turn when you hit with a weapon attack, deal bonus damage equal to your INT modifier.</p>
        <p><strong>Exploit Mark (bonus action, 1 CP):</strong> Mark one creature until start of your next turn. First hit on it each turn: ignore 2 AC · deal additional damage = INT modifier.</p>`,
      },

      { type: 'heading', text: 'Level Progression' },
      {
        name: 'Tactical Forecast', levelLabel: 'Level 2', minLevel: 2,
        desc: `<p>At end of each long rest, roll 2d20 (→3d20 at L10) as Forecast Rolls. Before any roll by a creature you can perceive, replace it with a Forecast Roll — declare before the roll. Each used once; unused rolls lost at next long rest.</p>`,
        uses: { inputs: ['op-fc1','op-fc2','op-fc3'], note: 'Forecast Rolls remaining (→3d20 at L10)' },
      },
      { type: 'subclass-picker', minLevel: 3 },
      {
        name: 'Combat Protocols', levelLabel: 'Level 3', minLevel: 3,
        desc: `<p>Choose one Combat Protocol (changeable after a long rest):</p>
        <ul>
          <li><strong>Assault Protocol:</strong> You and command-affected allies gain +1 damage on weapon attacks · Weak Point Exploitation deals +1 additional damage</li>
          <li><strong>Defense Protocol:</strong> Command-affected allies gain +1 AC · creatures you hit under Exploit Mark deal reduced damage = INT mod on their next attack</li>
          <li><strong>Recon Protocol:</strong> Command-affected allies gain advantage on Stealth checks · you gain +2 to attack rolls against creatures that haven't acted yet</li>
        </ul>`,
      },
      {
        name: 'Combat Stimulant', levelLabel: 'Level 5', minLevel: 5,
        desc: `<p><strong>Action | 2 CP</strong> — Choose one creature you can communicate with or see. It regains HP = 2d8 + INT modifier and gains advantage on its next attack roll before end of its next turn.</p>`,
        uses: { inputs: ['op-cs1','op-cs2','op-cs3','op-cs4','op-cs5','op-cs6'], note: '/ long rest = Proficiency Bonus' },
      },
      {
        name: 'Efficient Command', levelLabel: 'Level 6', minLevel: 6,
        desc: `<p>The first Tactical Command you use on each of your turns costs 0 CP.</p>`,
      },
      {
        name: 'Advanced Tactics &amp; Tactical Layering', levelLabel: 'Level 9', minLevel: 9,
        desc: `<ul>
          <li><strong>Advanced Tactics:</strong> Tactical Command may affect 2 allies with the same command instead of 1</li>
          <li><strong>Tactical Layering:</strong> When you use a Forecast Roll, add your INT modifier to the replaced roll</li>
        </ul>`,
      },
      {
        name: 'Protocol Scaling', levelLabel: 'Level 10', minLevel: 10,
        desc: `<p>Your active Combat Protocol improves: Assault → +2 damage bonus · Defense → +2 AC bonus · Recon → +2 to initiative. Tactical Forecast now rolls 3d20 per long rest.</p>`,
      },
      {
        name: 'Rapid Coordination', levelLabel: 'Level 11', minLevel: 11,
        desc: `<p>Once per round, you may use Tactical Command as a reaction. CP cost applies normally unless another feature reduces it.</p>`,
      },
      {
        name: 'Total Command', levelLabel: 'Level 13', minLevel: 13,
        desc: `<p><strong>Action | 3 CP</strong> — Choose up to INT modifier allies you can communicate with or perceive. Until start of your next turn: advantage on first attack roll · first hit deals additional damage = INT modifier. When activated, use one Forecast Roll without expending it.</p>`,
      },
      {
        name: 'Command Mastery', levelLabel: 'Level 17', minLevel: 17,
        desc: `<p>When you use Tactical Command, issue 2 commands as part of the same bonus action. Only one may benefit from Efficient Command.</p>`,
      },
      {
        name: 'Master Strategist', levelLabel: 'Level 18', minLevel: 18,
        desc: `<p>Tactical Command may affect a number of allies up to your INT modifier instead of 1. If using Advanced Tactics, all affected allies must receive the same command.</p>`,
      },
      {
        name: 'Supreme Commander', levelLabel: 'Level 20', minLevel: 20,
        desc: `<p>For 1 minute: unlimited CP · all Operator abilities cost 0 CP · allies you can communicate with gain +2 to hit, +2 AC, and +2 damage.</p>`,
        uses: { inputs: ['op-sc1'], note: '/ long rest' },
      },

      // Tactical Commander
      { type: 'heading', text: 'Tactical Commander', subclass: 'tactical-commander' },
      {
        name: 'Aggressive Coordination &amp; Target Focus', levelLabel: 'Level 3', minLevel: 3, subclass: 'tactical-commander',
        desc: `<p><strong>Aggressive Coordination:</strong> Once per turn, when an ally hits a creature, that hit deals additional damage = INT modifier.</p>
        <p><strong>Target Focus (bonus action, 1 CP):</strong> Mark one creature until start of your next turn. Allies gain +2 to hit that target.</p>`,
      },
      {
        name: 'Chain Assault', levelLabel: 'Level 7', minLevel: 7, subclass: 'tactical-commander',
        desc: `<p>When an ally hits a creature, another ally who can perceive that creature may use its reaction to make one weapon attack against it. Limit: once per round.</p>`,
      },
      {
        name: 'Overwhelm', levelLabel: 'Level 10', minLevel: 10, subclass: 'tactical-commander',
        desc: `<p>When a creature is under your mark, the first time each allied creature hits that target on its turn, that hit deals additional damage = INT modifier.</p>`,
      },
      {
        name: 'Kill Chain', levelLabel: 'Level 15', minLevel: 15, subclass: 'tactical-commander',
        desc: `<p>When a marked creature drops to 0 HP, choose up to INT modifier allies who can perceive the target. Each may immediately use its reaction to make one weapon attack or move up to its speed. Limit: once per round.</p>`,
      },

      // Defensive Coordinator
      { type: 'heading', text: 'Defensive Coordinator', subclass: 'defensive-coordinator' },
      {
        name: 'Shield Network &amp; Damage Mitigation', levelLabel: 'Level 3', minLevel: 3, subclass: 'defensive-coordinator',
        desc: `<p><strong>Shield Network:</strong> While conscious, allied creatures within 10 ft of you gain +2 AC.</p>
        <p><strong>Damage Mitigation (reaction, 1 CP):</strong> When a creature you can perceive takes damage, reduce that damage by 1d8 + INT modifier.</p>`,
      },
      {
        name: 'Reactive Shielding', levelLabel: 'Level 7', minLevel: 7, subclass: 'defensive-coordinator',
        desc: `<p><strong>Reaction | 1 CP</strong> — When an ally is hit by an attack, grant that ally resistance to that instance of damage. Limit: once per round.</p>`,
      },
      {
        name: 'Fortified Position', levelLabel: 'Level 10', minLevel: 10, subclass: 'defensive-coordinator',
        desc: `<p>When you use Tactical Command on an ally, that ally also gains advantage on saving throws and cannot be knocked prone until start of your next turn.</p>`,
      },
      {
        name: 'Bastion Protocol', levelLabel: 'Level 15', minLevel: 15, subclass: 'defensive-coordinator',
        desc: `<p><strong>Action | 3 CP</strong> — Choose up to INT modifier allies you can communicate with or perceive. Each gains temporary HP = your Operator level for 1 minute.</p>`,
      },

      // Strategic Controller
      { type: 'heading', text: 'Strategic Controller', subclass: 'strategic-controller' },
      {
        name: 'Systems Coordination &amp; Ship Uplink', levelLabel: 'Level 3', minLevel: 3, subclass: 'strategic-controller',
        desc: `<p><strong>Systems Coordination:</strong> Once per round when you can perceive an allied ship action, add INT modifier to one allied ship action roll (Helm, Weapons, Engineering, Sensors, or Command).</p>
        <p><strong>Ship Uplink (bonus action, 1 CP):</strong> Choose one allied station or role. It gains +2 on its next roll before end of its next turn.</p>`,
      },
      {
        name: 'Tactical Relay', levelLabel: 'Level 7', minLevel: 7, subclass: 'strategic-controller',
        desc: `<p>Once per combat, perform one Basic ship Command or Sensors action as a bonus action.</p>`,
      },
      {
        name: 'Tactical Override', levelLabel: 'Level 10', minLevel: 10, subclass: 'strategic-controller',
        desc: `<p><strong>Action | 2 CP</strong> — Choose one enemy ship or hostile system. That target has disadvantage on its next ship action roll before end of its next turn.</p>`,
      },
      {
        name: 'Fleet Command', levelLabel: 'Level 15', minLevel: 15, subclass: 'strategic-controller',
        desc: `<p>Choose up to INT modifier allied ships or stations. Until start of your next turn, each gains +2 on all ship action rolls.</p>`,
      },
    ],
    featsHeading: 'Specialist Feats',
    feats: [
      {
        name: 'Operator Feats',
        desc: `<ul>
          <li><strong>Command Efficiency:</strong> First Tactical Command each turn costs 0 CP</li>
          <li><strong>Extended Uplink:</strong> Commands ignore ordinary communication interference — only advanced jamming, hard signal loss, or total isolation blocks delivery</li>
          <li><strong>Coordinated Strike:</strong> When a command-affected creature hits with an attack, that attack deals +2 damage</li>
          <li><strong>Tactical Genius:</strong> Once per SR/LR, reroll one attack roll, ability check, or saving throw made by a creature you can perceive</li>
          <li><strong>Rapid Orders:</strong> Once per round, issue one Tactical Command as a free action</li>
          <li><strong>Battlefield Control:</strong> Creatures suffer −2 to saving throws against your Operator abilities</li>
        </ul>`,
      },
    ],
    notes: { name: 'op-notes', placeholder: 'Protocol tracking, subclass abilities, etc.' },
  },

  // ─────────────────────────────────────────────────────────────
  //  KINETICIST
  // ─────────────────────────────────────────────────────────────
  kineticist: {
    name: 'Kineticist',
    subclassInputName: 'kin-subclass',
    subclassLevel: 3,
    subclassTitle: 'Specialization — Subclass',
    subclasses: [
      { key: 'elemental-channeler', label: 'Elemental Channeler' },
      { key: 'force-adept',         label: 'Force Adept' },
      { key: 'battlefield-shaper',  label: 'Battlefield Shaper' },
    ],
    trackerHeading: 'Psionic Stats',
    trackers: [
      { name: 'kineticdc',        label: 'Kinetic Save DC', type: 'text' },
      { name: 'blastdamage',      label: 'Blast Damage',    type: 'text' },
      { name: 'elementalaffinity',label: 'Element',         type: 'text' },
    ],
    features: [
      { type: 'heading', text: 'Core Class Features' },
      {
        name: 'Kinetic Blast', levelLabel: 'Core · d6 HD · WIS &amp; INT saves',
        desc: `<p><strong>Action | Range 60 ft</strong> — Ranged attack using WIS. On a hit, deal force damage: 1d10 (L1) · 2d10 (L5) · 3d10 (L11) · 4d10 (L17).</p>
        <p><strong>Knockback (once per turn):</strong> When a kinetic ability hits, target makes a STR save. On failure, knocked back 5 ft per point failed (max 25 ft). Collision: 1d10 crushing per 5 ft of blocked movement (max 5d10). Large+ creatures have advantage. Anchored targets take half collision damage if they fail.</p>`,
      },
      {
        name: 'Kinetic Shielding', levelLabel: 'Core',
        desc: `<p><strong>Bonus action</strong> — Personal Shield (you gain temp HP = WIS mod + PB) or Projected Shield (ally within 30 ft gains same). Lasts 1 minute. At L10: protected target also gains +2 AC while THP remain. At L17: first damage each round reduced by WIS modifier.</p>`,
        uses: { inputs: ['kin-ks1','kin-ks2','kin-ks3','kin-ks4','kin-ks5','kin-ks6'], note: '/ long rest = Proficiency Bonus' },
      },
      {
        name: 'Psionic Control', levelLabel: 'Core',
        desc: `<p><strong>Bonus action</strong> — Move one unattended object ≤10 lbs within 30 ft, or perform simple environmental manipulation (open door, pull small item, activate switch, shift loose debris). Cannot directly damage creatures.</p>`,
      },

      { type: 'heading', text: 'Level Progression' },
      {
        name: 'Elemental Affinity', levelLabel: 'Level 2', minLevel: 2,
        desc: `<p>Choose Fire, Water, or Air. When you or your target are within 10 ft of a valid source of your element, your kinetic abilities deal +1d6 additional elemental damage. You also gain resistance to minor environmental effects of that element.</p>
        <p><em>Valid sources — Fire:</em> open flame, plasma leak, molten surface. <em>Water:</em> standing liquid, coolant spill, ice, dense mist. <em>Air:</em> decompression stream, vent blast, turbine wash.</p>`,
      },
      { type: 'subclass-picker', minLevel: 3 },
      {
        name: 'Environmental Surge', levelLabel: 'Level 6', minLevel: 6,
        desc: `<p>When your Kinetic Blast is empowered by a valid elemental source, gain +2 bonus damage per damage die rolled. (Example: 2d10 blast near a source gains +4 damage.)</p>`,
      },
      {
        name: 'Telekinetic Grasp', levelLabel: 'Level 9', minLevel: 9,
        desc: `<p><strong>Bonus action | 30 ft</strong> — Choose one Large or smaller creature. STR save or Restrained until end of your next turn. Creature may repeat the save at end of its turn to end the effect.</p>`,
      },
      {
        name: 'Elemental Infusion', levelLabel: 'Level 10', minLevel: 10,
        desc: `<p>If two valid elemental sources are available, apply two different elemental effects to the same attack or kinetic ability. You may not apply the same rider twice.</p>`,
      },
      {
        name: 'Psionic Barrier', levelLabel: 'Level 11', minLevel: 11,
        desc: `<p><strong>Reaction</strong> — When you or a creature within 30 ft takes damage, reduce that damage by 1d10 + WIS modifier.</p>`,
        uses: { inputs: ['kin-pb1','kin-pb2','kin-pb3','kin-pb4','kin-pb5','kin-pb6'], note: '/ long rest = Proficiency Bonus' },
      },
      {
        name: 'Environmental Mastery', levelLabel: 'Level 13', minLevel: 13,
        desc: `<p>Create a temporary elemental source in an unoccupied space within 30 ft. Lasts 1 minute. Counts as valid trigger for Elemental Affinity, Environmental Surge, and other elemental features.</p>`,
        uses: { inputs: ['kin-em1'], note: '/ short or long rest' },
      },
      {
        name: 'Force Pulse', levelLabel: 'Level 15', minLevel: 15,
        desc: `<p><strong>Action | 30-ft cone</strong> — Creatures take 6d6 force damage and are pushed 10 ft. DEX save: success = half damage, not pushed. Pushed targets may suffer collision damage normally.</p>`,
        uses: { inputs: ['kin-fp1'], note: '/ long rest' },
      },
      {
        name: 'Gravity Lens', levelLabel: 'Level 17', minLevel: 17,
        desc: `<p><strong>Action | 60 ft</strong> — 15-ft-radius zone for 1 minute. When an enemy enters for the first time on a turn or begins its turn there: STR save or speed halved + pulled up to 10 ft toward center. Once per turn per creature. Kinetic Blast also scales to 4d10.</p>`,
        uses: { inputs: ['kin-gl1','kin-gl2','kin-gl3','kin-gl4','kin-gl5','kin-gl6'], note: '/ long rest = Proficiency Bonus' },
      },
      {
        name: 'Psionic Ascendance', levelLabel: 'Level 20', minLevel: 20,
        desc: `<p>For 1 minute: fly speed = movement speed · resistance to all damage · Kinetic Blast crits on 18–20 · max knockback distance doubled.</p>`,
        uses: { inputs: ['kin-asc1'], note: '/ long rest' },
      },

      // Elemental Channeler
      { type: 'heading', text: 'Elemental Channeler', subclass: 'elemental-channeler' },
      {
        name: 'Elemental Conduit', levelLabel: 'Level 3', minLevel: 3, subclass: 'elemental-channeler',
        desc: `<p>When you use a kinetic ability near a valid elemental source, choose one rider effect:</p>
        <ul>
          <li><strong>Fire:</strong> Target takes 1d6 fire damage at the start of its next turn</li>
          <li><strong>Water:</strong> Target loses resistance to fire and heat-based effects until end of your next turn</li>
          <li><strong>Air:</strong> Target cannot take reactions until start of its next turn</li>
        </ul>`,
      },
      {
        name: 'Living Conduction', levelLabel: 'Level 7', minLevel: 7, subclass: 'elemental-channeler',
        desc: `<ul><li>Gain resistance to your chosen element</li><li>Ignore difficult terrain caused by your element</li></ul>`,
      },
      {
        name: 'Elemental Apex', levelLabel: 'Level 14', minLevel: 14, subclass: 'elemental-channeler',
        desc: `<p><strong>Reaction</strong> — When an elemental effect would affect you within 30 ft, absorb it (take no damage). The next kinetic ability you use before end of your next turn deals +2d6 elemental damage of your chosen type.</p>`,
      },
      {
        name: 'Stormform', levelLabel: 'Level 18', minLevel: 18, subclass: 'elemental-channeler',
        desc: `<p>For 1 minute: flight with hover · immunity to your chosen element · double all elemental bonus damage you deal.</p>`,
        uses: { inputs: ['kin-sf1'], note: '/ long rest' },
      },

      // Force Adept
      { type: 'heading', text: 'Force Adept', subclass: 'force-adept' },
      {
        name: 'Gravitic Tether', levelLabel: 'Level 3', minLevel: 3, subclass: 'force-adept',
        desc: `<p><strong>Action | 60 ft</strong> — 15-ft-radius field for 1 minute. Enemies that begin their turn in the field: STR save or speed halved until end of that turn. Allies in the field have advantage on STR checks and saves against forced movement.</p>`,
      },
      {
        name: 'Psionic Riposte', levelLabel: 'Level 7', minLevel: 7, subclass: 'force-adept',
        desc: `<p><strong>Reaction</strong> — When a creature misses you with a melee attack, deal 1d8 force damage to that creature.</p>`,
      },
      {
        name: 'Mental Catapult', levelLabel: 'Level 14', minLevel: 14, subclass: 'force-adept',
        desc: `<p><strong>Action | 30 ft</strong> — Target one Large or smaller creature or unsecured object. STR save or: hurled up to 20 ft in a direction you choose · knocked prone · 2d10 bludgeoning damage · collision damage may apply.</p>`,
      },
      {
        name: 'Force Singularity', levelLabel: 'Level 18', minLevel: 18, subclass: 'force-adept',
        desc: `<p><strong>Action | 60 ft</strong> — 10-ft-radius implosion sphere. CON save. Failure: pulled to center · 6d10 force damage · stunned until end of next turn. Success: half damage, not stunned.</p>`,
        uses: { inputs: ['kin-fsg1'], note: '/ long rest' },
      },

      // Battlefield Shaper
      { type: 'heading', text: 'Battlefield Shaper', subclass: 'battlefield-shaper' },
      {
        name: 'Kinetic Barricade', levelLabel: 'Level 3', minLevel: 3, subclass: 'battlefield-shaper',
        desc: `<p><strong>Bonus action</strong> — Create a 10-ft wall of force in an unoccupied space within 30 ft. Lasts 1 minute. Blocks line of sight · provides full cover · AC = 12 + PB · HP = 3 × Kineticist level.</p>`,
      },
      {
        name: 'Gravitic Feedback', levelLabel: 'Level 7', minLevel: 7, subclass: 'battlefield-shaper',
        desc: `<p>Enemies that enter or leave a space adjacent to your Kinetic Barricade or Gravitic Tether take 2d6 force damage. A creature can take this damage only once per turn.</p>`,
      },
      {
        name: 'Warp Step', levelLabel: 'Level 14', minLevel: 14, subclass: 'battlefield-shaper',
        desc: `<p><strong>Reaction</strong> — When targeted by an attack, teleport up to 10 ft to an unoccupied space you can see. If this breaks line of sight, the attack misses.</p>`,
      },
      {
        name: 'Spatial Collapse', levelLabel: 'Level 18', minLevel: 18, subclass: 'battlefield-shaper',
        desc: `<p><strong>Action | 60 ft</strong> — 20-ft-radius zone until end of your next turn: difficult terrain · enemies take 4d10 force damage · enemies are blinded. CON save for half damage, but blindness still applies on failure.</p>`,
        uses: { inputs: ['kin-sc1'], note: '/ long rest' },
      },
    ],
    featsHeading: 'Specialist Feats',
    feats: [
      {
        name: 'Kineticist Feats',
        desc: `<ul>
          <li><strong>Elemental Overdrive</strong> (req. Elemental Channeler): Elemental Conduit imposes −2 to target's next save · once per SR/LR, maximize elemental damage of one attack · +1 WIS or CON</li>
          <li><strong>Telekinetic Brute</strong> (req. Force Adept): Gravitic Tether radius → 20 ft and duration +1 min · Psionic Riposte also pushes target 5 ft · +1 STR or WIS</li>
          <li><strong>Spatial Architect</strong> (req. Battlefield Shaper): Maintain two Kinetic Barricades simultaneously · barricades last 2 min · once per LR, teleport 30 ft as bonus action without provoking OAs · +1 INT or WIS</li>
        </ul>`,
      },
    ],
    notes: { name: 'kin-notes', placeholder: 'Specialization abilities, elemental effects, etc.' },
  },

  // ─────────────────────────────────────────────────────────────
  //  SPECIALIST
  // ─────────────────────────────────────────────────────────────
  specialist: {
    name: 'Specialist',
    subclassInputName: 'spec-subclass',
    subclassLevel: 3,
    subclassTitle: 'Specialization — Subclass',
    subclasses: [
      { key: 'infiltrator', label: 'Infiltrator' },
      { key: 'saboteur',    label: 'Saboteur' },
      { key: 'marksman',    label: 'Marksman' },
    ],
    trackerHeading: 'Precision Strike',
    trackers: [
      // precisionStrikeDisplay is auto-computed; rendered via special raw block below
      { name: 'spec-expert-skills', label: 'Field Mastery Expertise', type: 'text' },
    ],
    features: [
      {
        type: 'raw',
        html: `<div class="kinetic-stats">
          <div class="k-stat">
            <input type="text" id="precisionStrikeDisplay" placeholder="—" readonly style="color:var(--accent);cursor:default">
            <label>Precision Strike</label>
          </div>
          <div class="k-stat" style="grid-column:span 2">
            <input type="text" name="spec-expert-skills" placeholder="—">
            <label>Field Mastery Expertise</label>
          </div>
        </div>`,
      },

      { type: 'heading', text: 'Core Class Features' },
      {
        name: 'Precision Strike', levelLabel: 'Core · d8 HD · DEX &amp; INT saves',
        desc: `<p>Once per turn, deal bonus damage when you hit a creature with an attack if at least one is true:</p>
        <ul>
          <li>You had advantage on the attack roll</li>
          <li>The target was unaware of you</li>
          <li>The target is within 5 ft of an ally of yours that is not incapacitated</li>
        </ul>
        <p>Applies to ranged weapon attacks and melee attacks made with finesse or light weapons.</p>
        <p><strong>Damage:</strong> +1d6 (L1–4) · +2d6 (L5–8) · +3d6 (L9–12) · +4d6 (L13–16) · +5d6 (L17+)</p>`,
      },
      {
        name: 'Tactical Stealth', levelLabel: 'Level 1',
        desc: `<ul>
          <li>Advantage on Stealth checks while in dim light, darkness, or any cover</li>
          <li>Moving at half speed never imposes a penalty on Stealth checks</li>
        </ul>`,
      },
      {
        name: 'Close Quarters Training', levelLabel: 'Level 1',
        desc: `<ul>
          <li>+1 to attack rolls for melee attacks made within 5 ft</li>
          <li>Once per turn, when you hit a creature within 5 ft, move up to 5 ft without provoking OAs</li>
        </ul>`,
      },

      { type: 'heading', text: 'Level Progression' },
      {
        name: 'Ghost Step', levelLabel: 'Level 2', minLevel: 2,
        desc: `<p><strong>Bonus action</strong> — Take one of: Dash · Disengage · Hide. While hidden via Ghost Step, your attacks have disadvantage until you attack.</p>`,
      },
      { type: 'subclass-picker', minLevel: 3 },
      {
        name: 'Deadly Accuracy', levelLabel: 'Level 5', minLevel: 5,
        desc: `<ul>
          <li>When you have advantage on an attack roll, gain +2 to hit</li>
          <li>Precision Strike bonus damage ignores resistance</li>
        </ul>`,
      },
      {
        name: 'Field Mastery', levelLabel: 'Level 6', minLevel: 6,
        desc: `<p>Choose one skill you are proficient in. Your proficiency bonus is doubled for checks with that skill.</p>`,
      },
      {
        name: 'Slip Reflexes', levelLabel: 'Level 7', minLevel: 7,
        desc: `<p>When subjected to an effect that allows a DEX saving throw: success → take 0 damage · failure → take half damage.</p>`,
      },
      {
        name: 'Shadow Operative', levelLabel: 'Level 9', minLevel: 9,
        desc: `<ul>
          <li>May attempt to Hide while lightly obscured</li>
          <li>Hidden + suppressed weapon, melee weapon, or vacuum: attack doesn't auto-reveal your position</li>
          <li>After the attack, immediately make a Stealth check to remain hidden</li>
        </ul>`,
      },
      {
        name: 'Double Tap', levelLabel: 'Level 11', minLevel: 11,
        desc: `<p>Once per turn, when you hit a creature with a weapon attack, make one additional weapon attack against the same target as a bonus action.</p>`,
      },
      {
        name: 'Weak Point Exploit', levelLabel: 'Level 13', minLevel: 13,
        desc: `<p>Your Precision Strike dice increase from d6s to d8s.</p>`,
      },
      {
        name: 'Execution Protocol', levelLabel: 'Level 15', minLevel: 15,
        desc: `<p>Once per turn, when you apply Precision Strike to a creature below 50% of its max HP, roll twice the number of Precision Strike dice and use the higher total.</p>`,
      },
      {
        name: 'Phase Ghost', levelLabel: 'Level 17', minLevel: 17,
        desc: `<p><strong>Passive:</strong> If you moved at least 10 ft on your turn, attacks against you have disadvantage until start of your next turn · you may move through enemy spaces (difficult terrain).</p>
        <p><strong>Reaction (1/round):</strong> When targeted by an attack, move up to 10 ft before the attack roll is made.</p>`,
      },
      {
        name: 'Elusive Killer', levelLabel: 'Level 18', minLevel: 18,
        desc: `<ul>
          <li>Attack rolls cannot gain advantage against you unless you are incapacitated</li>
          <li>When you use Ghost Step to Hide, also move up to half your speed as part of the same bonus action</li>
        </ul>`,
      },
      {
        name: 'Perfect Killer', levelLabel: 'Level 20', minLevel: 20,
        desc: `<p>Once per turn, when you hit with advantage and apply Precision Strike, target makes a CON save (Specialist DC). Failure: drops to 0 HP. Success: takes additional damage = PB + DEX modifier. A creature that succeeds is immune to this feature until it finishes a long rest.</p>`,
      },

      // Infiltrator
      { type: 'heading', text: 'Infiltrator', subclass: 'infiltrator' },
      {
        name: 'Silent Kill &amp; Ghost Entry', levelLabel: 'Level 3', minLevel: 3, subclass: 'infiltrator',
        desc: `<p><strong>Silent Kill:</strong> When you hit a creature with a melee attack while hidden, invisible, or unseen, and the target is unaware of you, deal additional damage equal to twice your Precision Strike dice. Non-elite targets (GM discretion) must also make a CON save or drop to 0 HP. Once per turn.</p>
        <p><strong>Ghost Entry:</strong> Advantage on checks to infiltrate guarded areas quietly, bypass doors/vents/hatches without detection, and conceal signs of entry or bodies.</p>`,
      },
      {
        name: 'Vanish Strike', levelLabel: 'Level 7', minLevel: 7, subclass: 'infiltrator',
        desc: `<p>When you deal Precision Strike damage with a melee attack, move up to half your speed without provoking OAs. If you end in cover, darkness, or light obscurement, you may attempt to Hide. If the target drops to 0 HP, creatures that didn't directly witness the strike don't auto-detect you.</p>`,
      },
      {
        name: 'Predator Veil', levelLabel: 'Level 10', minLevel: 10, subclass: 'infiltrator',
        desc: `<p>May attempt to Hide while lightly obscured, in cluttered interiors, or in dense foot traffic.</p>
        <p><strong>Bonus action:</strong> Shroud yourself in kinetic camouflage for 1 turn — effectively invisible. Ends immediately after you attack, force a save, or are clearly revealed. If Silent Kill is used while active, target has disadvantage on the CON save.</p>`,
        uses: { inputs: ['spec-pv1','spec-pv2','spec-pv3','spec-pv4','spec-pv5','spec-pv6'], note: '/ long rest = Proficiency Bonus' },
      },
      {
        name: 'Erase Target', levelLabel: 'Level 15', minLevel: 15, subclass: 'infiltrator',
        desc: `<p>Once per turn, when you hit with a melee attack while hidden/invisible/target totally unaware: maximum weapon damage · maximum Precision Strike damage · target makes CON save. Failure: non-elite → drops to 0 HP; others take damage and can't take reactions. Success: normal damage · can't speak or activate vocal alarms until end of its next turn.</p>`,
        uses: { inputs: ['spec-et1','spec-et2','spec-et3','spec-et4','spec-et5','spec-et6'], note: '/ long rest = Proficiency Bonus' },
      },

      // Saboteur
      { type: 'heading', text: 'Saboteur', subclass: 'saboteur' },
      {
        name: 'Explosive Expert &amp; Trap Master', levelLabel: 'Level 3', minLevel: 3, subclass: 'saboteur',
        desc: `<p><strong>Explosive Expert:</strong> Explosives (grenades, charges, mines, traps) deal bonus damage = Proficiency Bonus.</p>
        <p><strong>Trap Master:</strong> Set a number of traps = PB per long rest. Set Trap (action). Detection/Disarm DC = 8 + PB + INT mod. When triggered: DEX save (Specialist DC) — failure: 2d8 damage + speed 0 until end of next turn; success: half, no movement penalty. Max active traps = INT modifier (min 1).</p>`,
      },
      {
        name: 'Prescient Timing', levelLabel: 'Level 7', minLevel: 7, subclass: 'saboteur',
        desc: `<ul>
          <li>Creatures make DEX saves with disadvantage against your explosives and traps</li>
          <li>Creatures that fail the save cannot take reactions until end of their next turn</li>
        </ul>`,
      },
      {
        name: 'Chain Detonation', levelLabel: 'Level 10', minLevel: 10, subclass: 'saboteur',
        desc: `<p>Once per turn, when one of your explosives or traps deals damage, trigger a secondary detonation originating from the same point, affecting creatures within 10 ft, dealing half the original damage. DEX save (Specialist DC) — failure: full secondary damage; success: half.</p>`,
      },
      {
        name: 'Cataclysm Protocol', levelLabel: 'Level 15', minLevel: 15, subclass: 'saboteur',
        desc: `<p>Once per short or long rest, when an explosive or trap deals damage, activate: maximum possible damage · ignores armor and damage reduction · automatically triggers Chain Detonation without its once-per-turn limit.</p>`,
        uses: { inputs: ['spec-cp1'], note: '/ short or long rest' },
      },

      // Marksman
      { type: 'heading', text: 'Marksman', subclass: 'marksman' },
      {
        name: 'Deadeye Optics &amp; Patient Aim', levelLabel: 'Level 3', minLevel: 3, subclass: 'marksman',
        desc: `<p><strong>Deadeye Optics:</strong> First ranged attack on your turn vs a target beyond Close range gains +2 to hit. If made from cover or while hidden, first hit each turn also deals additional damage = WIS or INT modifier (chosen at L3).</p>
        <p><strong>Patient Aim:</strong> Move no more than half speed → next ranged attack before end of turn: ignores half and three-quarters cover · reroll one damage die · if it misses, your exact position isn't revealed unless clearly observed.</p>`,
      },
      {
        name: 'Terrain Ghost', levelLabel: 'Level 7', minLevel: 7, subclass: 'marksman',
        desc: `<p>While in cover, lightly obscured, on elevated terrain, or firing through broken line of sight: ranged attacks against you are made with disadvantage (until you move into open space, are clearly revealed, or become incapacitated). Once on each of your turns after hitting with a ranged attack, move up to 10 ft without provoking OAs (end in cover or a valid firing position if possible).</p>`,
      },
      {
        name: 'Kill Zone', levelLabel: 'Level 10', minLevel: 10, subclass: 'marksman',
        desc: `<p><strong>Bonus action</strong> — Choose one creature you can see. Until start of your next turn, the first ranged weapon attack that hits it: crit range 19–20 · +2d8 damage · ignores half and three-quarters cover · target's movement −10 ft. If already under a movement penalty when hit, target also cannot take reactions.</p>`,
      },
      {
        name: 'Unseen Reaper', levelLabel: 'Level 15', minLevel: 15, subclass: 'marksman',
        desc: `<p>If hidden when making a ranged attack, position not automatically revealed if: weapon is suppressed · attack is at Long range or farther · firing from heavy cover or broken line of sight. After the attack, make a Stealth check to remain hidden. If it also applies Precision Strike: +1 additional Precision Strike die · target cannot take reactions until end of its next turn.</p>`,
      },
    ],
    featsHeading: 'Specialist Feats',
    feats: [
      {
        name: 'Specialist Feats',
        desc: `<ul>
          <li><strong>Close Quarters Killer:</strong> Melee weapon attacks deal +2 damage · once per turn, if target is within 5 ft of one of your allies, you have advantage on your melee attack against it</li>
          <li><strong>Ghost Movement:</strong> Ignore difficult terrain · move through enemy spaces · move at least 10 ft before attacking → advantage on your next attack that turn</li>
          <li><strong>Precision Mastery:</strong> Once per turn, when you miss with an attack, reroll the attack</li>
          <li><strong>Combat Reload:</strong> Reloading is a free action once per turn · after reloading, +1 to hit on your next attack before end of the turn</li>
        </ul>`,
      },
    ],
    notes: { name: 'spec-notes', placeholder: 'Specialization abilities, active marks, etc.' },
  },

}; // end CLASS_DATA
