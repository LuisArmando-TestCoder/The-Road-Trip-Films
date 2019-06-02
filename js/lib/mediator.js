const M = new (function () {
	const topics = {};
	return class Mediator {
		s(topic, callback) {
			if (!topics[topic]) {
				topics[topic] = [];
			}
			topics[topic].push(callback);
		}
		p(topic) {
			if (!topics[topic]) {
				return;
			}
			return {
				t(e) {
					topics[topic].forEach((callback) => {
						callback(e);
					});
				}
			};
		}
	};
}());