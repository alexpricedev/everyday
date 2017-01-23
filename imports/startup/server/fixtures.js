const successfulAPIResponse = {
  "data": {
    "getUser": {
      "username": "alex",
      "actions": {
        "edges": [
          {
            "node": {
              "id": "QWN0aW9uOjE=",
              "text": "Drink water",
              "type": "todo",
              "complete": false,
              "time": null
            }
          },
          {
            "node": {
              "id": "QWN0aW9uOjl=",
              "text": "Clean teeth",
              "type": "timer",
              "complete": true,
              "time": 180
            }
          },
          {
            "node": {
              "id": "QWN0aW9uOjM=",
              "text": "Eat breakfase",
              "type": "todo",
              "complete": false,
              "time": null
            }
          }
        ]
      }
    }
  }
}

const edges = [
  {
    "node": {
      "id": "QWN0aW9uOjE=",
      "text": "Drink water",
      "type": "todo",
      "complete": false,
      "time": null
    }
  },
  {
    "node": {
      "id": "QWN0aW9uOjl=",
      "text": "Clean teeth",
      "type": "timer",
      "complete": true,
      "time": 180
    }
  },
  {
    "node": {
      "id": "QWN0aW9uOjM=",
      "text": "Eat breakfase",
      "type": "todo",
      "complete": false,
      "time": null
    }
  }
];

const actions = [
  {
    "id": "QWN0aW9uOjE=",
    "text": "Drink water",
    "type": "todo",
    "complete": false,
    "time": null
  },
  {
    "id": "QWN0aW9uOjl=",
    "text": "Clean teeth",
    "type": "timer",
    "complete": true,
    "time": 180
  },
  {
    "id": "QWN0aW9uOjM=",
    "text": "Eat breakfase",
    "type": "todo",
    "complete": false,
    "time": null
  }
];

export {
  successfulAPIResponse,
  edges,
  actions,
};
