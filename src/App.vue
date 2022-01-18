<template>
  <Experiment title="Mental Rotation Experiment">
    <InstructionScreen :title="'Welcome'">
      This is a mental rotation experiment.
    </InstructionScreen>

    <InstructionScreen :title="'General Instructions'">
      If you see two photos of the same rotation, press f; else, press j.
    </InstructionScreen>

    		<template v-for="(trial, i) of training_trials">
			<KeypressScreen
				question="Are they of the same rotation?"
				:feedback-time="800"
				:fixation-time="300"
				:response-time="7500"
				:keys="{
					'f':'same',
					'j':'different'
				}"
			>
				<template #stimulus>
					<img :src="trial.picture" />
					<Record :data="{
						angle: trial.angle,
						expected_answer: trial.expected,
						item_number: trial.item,
						trial_type: 'training',
						trial_number: i+1,
					}"/>
				</template>
				<template #feedback>
					<p v-if="!$magpie.measurements.hasOwnProperty('response')">Faster!</p>
					<p v-else-if="$magpie.measurements.response == trial.expected">That's right!</p>
					<p v-else>Not correct, sorry!</p>
				</template>
			</KeypressScreen>
		</template>

    <PostTestScreen />

    <DebugResultsScreen />
  </Experiment>
</template>

<script>
import main_trials from '../trials/mr_main_trials.csv';
import training_trials from '../trials/mr_training_trials.csv';

export default {
	name: 'App',
	data() {
		return {
			main_trials: _.shuffle(main_trials),
			training_trials: _.shuffle(training_trials),
		};
	}
};
</script>
