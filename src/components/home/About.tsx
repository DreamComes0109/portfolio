import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const About = () => {
  return (
    <Box className="container my-24 mx-auto md:px-6 w-3/4" id="features">
      <section className="mb-32 text-center">
        <h2 className="text-4xl underline decoration-sky-600 mb-20 font-bold">
          About
        </h2>

        <Box className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-x-12">
          <Box className="mb-12">
            <Box className="bg-sky-600 h-fit w-fit lg:mb-0 px-4 py-2 rounded-lg mx-auto">
              <svg
                fill="#FFFFFF"
                height={100}
                width={100}
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 950.002 950.002"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M949.869,741.307c-0.072-2.064-0.145-4.139-0.217-6.221c-0.075-2.082-0.152-4.17-0.229-6.268l-0.06-1.57l-0.03-0.787 l-0.008-0.197l-0.02-1.76l-0.006-0.082l-0.025-0.326l-0.201-2.607c-0.271-3.479-0.542-6.973-0.813-10.467l-0.207-2.645 l-0.312-3.43c-0.216-2.281-0.431-4.561-0.646-6.836c-0.223-2.271-0.447-4.539-0.669-6.799c-0.115-1.129-0.229-2.256-0.343-3.381 c-0.138-1.041-0.276-2.08-0.414-3.119c-1.139-8.242-2.156-16.342-3.608-24.129c-0.686-3.896-1.319-7.727-2.031-11.461 c-0.777-3.725-1.537-7.367-2.277-10.914c-1.402-7.098-3.163-13.727-4.647-19.855c-0.38-1.529-0.752-3.029-1.115-4.492 c-0.404-1.457-0.8-2.877-1.185-4.264c-0.782-2.766-1.523-5.391-2.221-7.855c-0.71-2.461-1.336-4.771-1.99-6.889 c-0.674-2.111-1.292-4.051-1.851-5.803c-0.829-2.574-1.528-4.742-2.079-6.455c-0.815-2.529-3.487-3.951-6.043-3.223 l-160.613,45.771c-2.447,0.697-3.964,3.135-3.498,5.637c0.174,0.934,0.373,2.004,0.595,3.201c0.229,1.205,0.483,2.541,0.759,3.994 c0.261,1.457,0.466,3.053,0.729,4.74c0.258,1.689,0.532,3.488,0.821,5.383c0.141,0.947,0.308,1.912,0.439,2.91 c0.114,1,0.23,2.025,0.35,3.07c0.447,4.184,1.115,8.67,1.413,13.48c0.197,2.393,0.401,4.852,0.609,7.361 c0.156,2.518,0.234,5.098,0.368,7.709c0.348,5.213,0.282,10.641,0.382,16.115l0.023,2.039l-0.072,1.805 c-0.041,1.203-0.083,2.408-0.124,3.617c-0.032,1.203-0.065,2.41-0.098,3.619l-0.038,1.807l-0.11,2.602 c-0.148,3.502-0.299,7.002-0.448,10.49l-0.111,2.613l-0.015,0.326l-0.003,0.08c0.002,0.393-0.03-3.111-0.02-1.598l-0.013,0.129 l-0.048,0.516l-0.095,1.031c-0.124,1.373-0.248,2.738-0.371,4.102c-0.119,1.359-0.238,2.715-0.355,4.062 c-0.16,1.342-0.319,2.678-0.479,4.004c-0.341,2.65-0.551,5.275-0.973,7.832c-0.37,2.559-0.734,5.072-1.09,7.535 c-0.426,2.445-0.842,4.838-1.246,7.166c-0.366,2.33-0.856,4.574-1.292,6.746c-0.456,2.168-0.819,4.273-1.292,6.271 c-0.461,1.998-0.903,3.91-1.324,5.73c-0.208,0.898-0.41,1.773-0.606,2.625c-0.202,0.73-0.397,1.438-0.588,2.125 c-0.112,0.42-0.218,0.814-0.327,1.221H944.3c2.633,0,4.826-2.066,4.926-4.697c0.001-0.016,0.001-0.031,0.002-0.047 c0.163-3.658,0.331-7.414,0.503-11.254c0.073-3.836,0.147-7.756,0.224-11.742c0.112-3.982-0.009-8.029-0.02-12.121 C949.912,745.432,949.891,743.375,949.869,741.307z"></path>
                      <path d="M898.791,535.129c2.635-1.061,3.837-4.113,2.622-6.68c-0.54-1.141-1.171-2.475-1.886-3.984 c-0.675-1.418-1.421-2.988-2.231-4.697c-1.049-2.137-2.183-4.447-3.396-6.916c-1.222-2.459-2.521-5.076-3.893-7.834 c-0.695-1.434-1.378-2.617-2.093-3.963c-0.712-1.316-1.441-2.662-2.186-4.037c-1.497-2.744-3.028-5.613-4.671-8.551 c-1.697-2.906-3.451-5.912-5.254-9.002c-0.904-1.541-1.821-3.104-2.749-4.684c-0.971-1.556-1.954-3.131-2.947-4.723 c-1.997-3.171-4.038-6.412-6.112-9.706c-4.377-6.45-8.734-13.196-13.597-19.761c-1.194-1.653-2.395-3.312-3.598-4.976l-1.81-2.494 l-1.884-2.453c-2.52-3.263-5.05-6.537-7.58-9.812c-2.575-3.237-5.239-6.406-7.85-9.587c-1.32-1.58-2.599-3.183-3.946-4.727 c-1.351-1.539-2.697-3.074-4.04-4.603c-1.343-1.523-2.68-3.043-4.011-4.554c-1.323-1.517-2.657-3.008-4.033-4.45 c-2.724-2.901-5.414-5.766-8.06-8.585c-2.65-2.81-5.394-5.451-8.005-8.091c-2.63-2.626-5.186-5.205-7.796-7.6 c-2.581-2.416-5.093-4.766-7.521-7.04c-2.418-2.279-4.887-4.349-7.187-6.399c-2.319-2.028-4.542-3.971-6.656-5.819 c-2.168-1.787-4.225-3.481-6.157-5.073c-1.934-1.586-3.743-3.07-5.416-4.442c-1.676-1.367-3.279-2.552-4.692-3.657 c-2.058-1.579-3.796-2.913-5.177-3.973c-2.105-1.616-5.106-1.271-6.798,0.776l-86.204,104.346 c-1.625,1.968-1.486,4.844,0.327,6.64c0.721,0.712,1.553,1.536,2.489,2.463c0.897,0.901,1.925,1.855,2.979,2.969 c1.054,1.113,2.192,2.318,3.409,3.604c1.219,1.28,2.515,2.642,3.88,4.078c1.317,1.482,2.702,3.043,4.147,4.67 c1.427,1.642,2.987,3.272,4.471,5.09c1.497,1.8,3.044,3.66,4.636,5.573c1.621,1.878,3.168,3.917,4.77,5.977 c1.585,2.074,3.279,4.119,4.871,6.312c1.593,2.186,3.212,4.408,4.851,6.658c0.836,1.107,1.629,2.262,2.41,3.434 c0.79,1.164,1.584,2.332,2.381,3.506c0.798,1.168,1.601,2.342,2.404,3.52c0.802,1.178,1.537,2.41,2.312,3.615 c1.522,2.432,3.1,4.828,4.596,7.277c1.458,2.473,2.917,4.947,4.369,7.41l1.09,1.838l1.021,1.877 c0.682,1.246,1.361,2.49,2.038,3.727c2.795,4.889,5.154,9.93,7.623,14.666c1.13,2.428,2.241,4.814,3.329,7.152 c0.544,1.164,1.082,2.316,1.614,3.453c0.493,1.158,0.979,2.301,1.459,3.43c0.965,2.246,1.903,4.434,2.812,6.547 c0.839,2.143,1.649,4.213,2.427,6.199c0.39,0.992,0.77,1.963,1.142,2.912c0.352,0.926,0.788,1.928,1.022,2.699 c0.555,1.619,1.08,3.156,1.574,4.6c0.504,1.434,0.977,2.775,1.413,4.016c0.573,1.711,1.099,3.279,1.574,4.697 c0.529,1.584,0.995,2.984,1.395,4.184c0.898,2.693,3.88,4.066,6.515,3.008L898.791,535.129z"></path>
                      <path d="M459.808,348.748c1.306,0.178,2.75,0.375,4.324,0.59c1.564,0.272,3.256,0.567,5.063,0.882 c1.804,0.31,3.724,0.639,5.747,0.987c1.758,0.292,3.579,0.716,5.472,1.112l54.404-111.282c-2.697-0.421-5.372-0.839-7.993-1.248 c-1.796-0.267-3.564-0.574-5.325-0.794c-1.761-0.213-3.501-0.424-5.218-0.632c-3.429-0.407-6.764-0.804-9.989-1.187 c-3.234-0.277-6.359-0.545-9.358-0.802c-3-0.23-5.861-0.533-8.6-0.663c-2.734-0.134-5.328-0.262-7.765-0.382 c-2.435-0.115-4.713-0.222-6.818-0.322c-2.107-0.034-4.043-0.065-5.792-0.093c-2.46-0.03-4.548-0.055-6.222-0.075 c-2.655-0.032-4.852,2.043-4.979,4.695l-4.961,103.577c-0.122,2.552,1.719,4.774,4.25,5.121 C457.126,348.38,458.383,348.553,459.808,348.748z"></path>
                      <path d="M606.027,405.781c1.462,1.063,2.848,2.071,4.15,3.02c1.304,0.934,2.525,1.808,3.654,2.617 c0.489,0.336,1.296,0.948,1.955,1.438c0.679,0.507,1.326,0.99,1.939,1.448c1.339,0.999,2.521,1.881,3.533,2.636 c2.276,1.698,5.506,1.124,7.065-1.25l71.03-108.196c1.56-2.374,0.803-5.567-1.661-6.98c-1.096-0.628-2.375-1.362-3.823-2.193 c-0.665-0.382-1.365-0.783-2.101-1.205c-0.801-0.453-1.638-0.927-2.511-1.421c-2.021-1.114-4.207-2.317-6.542-3.604 c-2.336-1.273-4.823-2.627-7.443-4.056c-2.497-1.251-5.121-2.566-7.86-3.939c-2.75-1.342-5.556-2.835-8.565-4.19 c-2.995-1.372-6.091-2.791-9.273-4.25c-3.161-1.492-6.497-2.847-9.883-4.269c-3.4-1.392-6.821-2.914-10.394-4.257 c-0.905-0.343-1.824-0.69-2.736-1.036l-30.642,132.998c1.694,1.064,3.29,2.192,4.862,3.21 C602.611,403.515,604.361,404.676,606.027,405.781z"></path>
                      <path d="M364.434,348.206c1.372-0.181,2.719-0.405,4.064-0.547c1.345-0.136,2.674-0.271,3.984-0.405 c2.615-0.271,5.158-0.535,7.619-0.791c2.468-0.165,4.853-0.325,7.142-0.479c1.142-0.078,2.26-0.154,3.353-0.229 c1.09-0.073,2.182-0.166,3.118-0.167c1.929-0.051,3.76-0.098,5.479-0.143c1.714-0.054,3.316-0.105,4.8-0.152 c1.829-0.012,3.509-0.023,5.025-0.033c1.67-0.009,3.146-0.017,4.408-0.024c2.84-0.015,5.072-2.42,4.886-5.254l-6.394-97.57 c-0.187-2.834-2.713-4.927-5.53-4.571c-1.253,0.158-2.716,0.343-4.373,0.552c-1.536,0.195-3.237,0.412-5.089,0.648 c-2.188,0.325-4.554,0.675-7.083,1.05c-2.521,0.384-5.205,0.793-8.034,1.224c-1.448,0.204-2.781,0.475-4.18,0.739 c-1.395,0.266-2.822,0.539-4.279,0.817c-2.909,0.562-5.938,1.148-9.076,1.754c-3.113,0.709-6.333,1.443-9.642,2.196 c-1.651,0.379-3.325,0.764-5.019,1.154c-1.692,0.396-3.389,0.88-5.11,1.325c-3.435,0.915-6.942,1.85-10.51,2.8 c-3.532,1.065-7.123,2.147-10.757,3.243c-1.812,0.561-3.643,1.09-5.463,1.689c-1.812,0.619-3.637,1.24-5.467,1.865 c-1.827,0.626-3.661,1.254-5.5,1.885c-1.84,0.626-3.683,1.255-5.501,1.972c-3.645,1.391-7.304,2.788-10.963,4.185 c-3.643,1.426-7.226,3.006-10.817,4.501c-1.79,0.763-3.585,1.499-5.354,2.282c-1.757,0.811-3.508,1.619-5.253,2.425 c-1.741,0.806-3.476,1.61-5.201,2.409c-1.725,0.798-3.443,1.584-5.113,2.451c-3.352,1.692-6.663,3.364-9.919,5.008 c-3.257,1.633-6.361,3.435-9.444,5.094c-3.069,1.69-6.087,3.302-8.934,5.039c-2.863,1.698-5.648,3.351-8.342,4.949 c-2.702,1.576-5.208,3.278-7.664,4.816c-2.439,1.563-4.776,3.062-6.999,4.487c-2.175,1.493-4.239,2.909-6.178,4.24 c-1.934,1.332-3.744,2.578-5.418,3.731c-1.672,1.153-3.151,2.296-4.514,3.284c-1.847,1.364-3.424,2.528-4.7,3.47 c-2.131,1.573-2.631,4.544-1.141,6.735l40.515,59.566c1.442,2.12,4.261,2.785,6.494,1.524c1.029-0.58,2.245-1.267,3.632-2.049 c1.209-0.669,2.517-1.459,3.994-2.228c1.476-0.77,3.072-1.6,4.777-2.488c1.7-0.889,3.51-1.835,5.417-2.832 c1.94-0.93,3.979-1.908,6.107-2.928c2.138-0.996,4.307-2.137,6.646-3.132c2.321-1.019,4.721-2.072,7.189-3.155 c2.443-1.125,5.031-2.108,7.649-3.158c2.632-1.02,5.268-2.174,8.029-3.149c2.749-0.991,5.545-1.998,8.374-3.018 c1.403-0.533,2.847-0.984,4.294-1.446c1.444-0.465,2.896-0.932,4.353-1.401c1.454-0.47,2.914-0.942,4.378-1.416 c1.472-0.447,2.965-0.847,4.448-1.275c2.979-0.824,5.938-1.738,8.938-2.504c3.002-0.743,6.004-1.486,8.994-2.225 c1.484-0.395,2.99-0.704,4.489-1.013c1.496-0.315,2.988-0.629,4.475-0.942c1.482-0.315,2.959-0.628,4.429-0.94 c1.473-0.294,2.954-0.521,4.415-0.784c2.922-0.507,5.808-1.009,8.648-1.501C358.885,348.973,361.688,348.585,364.434,348.206z"></path>
                      <path d="M88.175,425.22c-1.062,1.502-2.128,3.011-3.199,4.526c-1.068,1.514-2.14,3.034-3.216,4.559 c-1.071,1.527-2.073,3.111-3.115,4.669c-2.054,3.137-4.156,6.25-6.168,9.422c-1.965,3.199-3.93,6.398-5.887,9.585l-1.46,2.386 l-1.386,2.425c-0.921,1.612-1.839,3.221-2.754,4.822c-3.74,6.353-6.989,12.847-10.291,19.015 c-1.537,3.145-3.049,6.238-4.529,9.266c-0.734,1.512-1.461,3.01-2.178,4.488c-0.675,1.498-1.341,2.979-1.999,4.441 c-1.31,2.918-2.584,5.758-3.817,8.504c-1.15,2.781-2.262,5.467-3.329,8.045c-1.046,2.586-2.103,5.033-3.004,7.408 c-0.889,2.377-1.733,4.633-2.527,6.752c-0.79,2.117-1.529,4.098-2.212,5.93c-0.631,1.85-1.21,3.549-1.734,5.084 c-0.68,2.018-1.264,3.75-1.741,5.168c-0.845,2.506,0.44,5.225,2.91,6.172l37.71,14.457c2.4,0.92,5.103-0.154,6.212-2.473 c0.55-1.148,1.207-2.523,1.962-4.102c0.626-1.301,1.318-2.742,2.073-4.311c0.802-1.547,1.669-3.217,2.596-5.004 c0.924-1.781,1.906-3.68,2.942-5.68c1.044-1.994,2.246-4.039,3.439-6.199c1.208-2.148,2.467-4.387,3.77-6.705 c1.373-2.273,2.792-4.625,4.252-7.043c0.727-1.207,1.464-2.43,2.21-3.668c0.785-1.215,1.58-2.443,2.383-3.688 c1.606-2.48,3.247-5.012,4.916-7.59c3.546-5.02,7.014-10.307,10.933-15.406c0.957-1.289,1.918-2.582,2.882-3.879l1.445-1.947 l1.514-1.904c2.016-2.539,4.04-5.086,6.064-7.633c2.061-2.516,4.2-4.967,6.279-7.439c1.054-1.227,2.066-2.479,3.145-3.672 c1.08-1.191,2.156-2.379,3.228-3.562c1.07-1.182,2.135-2.359,3.195-3.531c1.05-1.178,2.11-2.335,3.211-3.444 c2.166-2.243,4.306-4.459,6.411-6.64c2.101-2.177,4.294-4.197,6.364-6.239c2.086-2.027,4.104-4.027,6.182-5.86 c2.044-1.86,4.032-3.669,5.956-5.42c1.908-1.761,3.874-3.333,5.69-4.911c1.828-1.557,3.58-3.049,5.246-4.468 c1.636-1.295,3.188-2.523,4.646-3.679c1.45-1.154,2.807-2.235,4.062-3.235c0.576-0.476,1.356-1.046,2.015-1.547 c0.676-0.511,1.321-0.997,1.933-1.458c1.333-1.007,2.51-1.895,3.518-2.655c2.267-1.711,2.618-4.973,0.774-7.133l-42.935-50.299 c-1.844-2.16-5.121-2.325-7.166-0.355c-0.909,0.876-1.972,1.899-3.174,3.058c-0.552,0.531-1.134,1.092-1.744,1.679 c-0.621,0.603-1.212,1.152-1.982,1.939c-1.472,1.485-3.063,3.092-4.764,4.808c-1.692,1.717-3.493,3.544-5.392,5.47 c-1.765,1.912-3.621,3.922-5.557,6.019c-1.912,2.113-3.974,4.242-5.969,6.576c-2.003,2.322-4.073,4.723-6.202,7.19 c-2.155,2.438-4.24,5.057-6.385,7.714c-2.129,2.671-4.373,5.336-6.514,8.16c-2.135,2.824-4.305,5.695-6.501,8.603 C90.296,422.222,89.229,423.71,88.175,425.22z"></path>
                      <path d="M10.155,601.572c-0.251,1.236-0.545,2.684-0.878,4.32c-0.305,1.502-0.643,3.166-1.011,4.977 c-0.361,1.852-0.714,4.039-1.108,6.271c-0.388,2.254-0.8,4.652-1.234,7.18c-0.21,1.26-0.45,2.562-0.649,3.875 c-0.177,1.305-0.357,2.639-0.542,4c-0.704,5.453-1.631,11.32-2.165,17.588c-0.31,3.123-0.628,6.33-0.953,9.609 c-0.268,3.283-0.447,6.645-0.678,10.053c-0.54,6.811-0.639,13.875-0.864,21.021L0,693.152l0.013,2.697 c0.01,1.801,0.02,3.605,0.03,5.414c0.011,1.807,0.022,3.617,0.032,5.428l0.017,2.717l0.104,2.719 c0.147,3.617,0.294,7.236,0.441,10.84l0.111,2.695l0.034,0.873l0.048,0.65l0.096,1.299c0.128,1.732,0.255,3.459,0.382,5.18 c0.127,1.721,0.254,3.434,0.379,5.139c0.173,1.777,0.344,3.549,0.516,5.309c0.173,1.758,0.345,3.504,0.516,5.24 c0.086,0.865,0.172,1.729,0.258,2.588c0.107,0.846,0.214,1.689,0.32,2.529c0.426,3.35,0.845,6.645,1.255,9.871 c0.495,3.211,0.979,6.354,1.449,9.412c0.44,3.057,1.007,6.014,1.528,8.873c0.043,0.229,0.086,0.455,0.128,0.682 c0.435,2.338,2.469,4.031,4.846,4.031h13.291c2.838,0,5.09-2.389,4.923-5.221c-0.045-0.756-0.091-1.52-0.142-2.291 c-0.166-2.756-0.366-5.598-0.43-8.531c-0.096-2.928-0.194-5.936-0.295-9.01c-0.019-3.072-0.038-6.211-0.057-9.404 c-0.005-0.797-0.01-1.598-0.015-2.4c0.017-0.791,0.035-1.586,0.053-2.385c0.035-1.592,0.07-3.197,0.106-4.812 c0.035-1.611,0.071-3.234,0.107-4.865c0.08-1.707,0.159-3.424,0.24-5.146c0.08-1.723,0.161-3.453,0.241-5.188l0.061-1.303 l0.03-0.652l0.004-0.082c0-0.207,0.004,0.191,0.006,0.123l0.012-0.158l0.025-0.314l0.202-2.523 c0.268-3.365,0.537-6.74,0.807-10.117l0.206-2.527l0.291-2.521c0.194-1.678,0.387-3.354,0.58-5.027 c0.192-1.672,0.384-3.34,0.575-5.002l0.285-2.488l0.369-2.471c1.012-6.57,1.872-13.033,3.132-19.221 c0.591-3.1,1.12-6.15,1.727-9.119c0.661-2.957,1.307-5.85,1.936-8.666c1.164-5.641,2.673-10.885,3.901-15.746 c0.315-1.213,0.623-2.402,0.924-3.562c0.318-1.143,0.661-2.225,0.977-3.297c0.637-2.133,1.242-4.156,1.81-6.059 c0.581-1.918,1.058-3.633,1.614-5.354c0.583-1.756,1.117-3.365,1.601-4.82c0.526-1.586,0.991-2.986,1.389-4.186 c0.895-2.693-0.668-5.58-3.412-6.311l-33.319-8.885C13.513,597.064,10.721,598.789,10.155,601.572z"></path>
                      <path d="M387.317,774.27c10.84,5.299,22.323,7.811,33.628,7.811c28.378,0,55.65-15.811,68.953-43.023 c2.562-5.238,4.545-11.021,5.835-16.467l77.577-336.717l29.544-128.233l18.303-79.437c2.13-9.245-5.224-15.543-12.602-15.543 c-4.319,0-8.647,2.159-11.087,7.148l-37.245,76.183l-54.944,112.386L352.104,671.689 C333.501,709.74,349.267,755.668,387.317,774.27z M423.789,665.836c20.759,0,37.588,16.828,37.588,37.588 c0,20.758-16.829,37.588-37.588,37.588s-37.588-16.83-37.588-37.588C386.201,682.662,403.03,665.836,423.789,665.836z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </Box>
            <p className="text-gray-700 font-bold text-3xl mt-6">Fast</p>
            <p className="lg:text-lg font-normal">
              Fast load times and lag free interaction, my highest priority.
            </p>
          </Box>

          <Box className="mb-12">
            <Box className="bg-sky-600 h-fit w-fit lg:mb-0 px-4 py-3 rounded-lg mx-auto">
              <svg
                viewBox="0 0 48 48"
                enable-background="new 0 0 48 48"
                width={90}
                height={90}
                id="Layer_3"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M46.25,0H2.875H0v8v32h20v8h20v-8h8V8V0H46.25z M36,3c1.104,0,2,0.896,2,2s-0.896,2-2,2s-2-0.896-2-2 S34.896,3,36,3z M6,3h24c1.104,0,2,0.896,2,2s-0.896,2-2,2H6C4.896,7,4,6.104,4,5S4.896,3,6,3z M30,46.594c-1.104,0-2-0.896-2-2 s0.896-2,2-2s2,0.896,2,2S31.104,46.594,30,46.594z M36,40.969H24V40v-4V18.083h12V36v4V40.969z M44,36h-4V14.083H20V36H4V10h40V36z M42,7c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2S43.104,7,42,7z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </Box>
            <p className="text-gray-700 font-bold text-3xl mt-7">Responsive</p>
            <p className="lg:text-lg font-normal">
              My layouts will work on any device, big or small.
            </p>
          </Box>

          <Box className="mb-12">
            <Box className="bg-sky-600 h-fit w-fit lg:mb-0 px-4 py-2 rounded-lg mx-auto">
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                fill="#FFFFFF"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#FFFFFF"
                    d="M17.34 17.38v34.08C37.24 85.91 61.4 120.5 95.03 151c6.97 24.6 23.57 43.7 46.27 53.9-5.9-8.2-9.4-18.1-9.6-30.1 12 .1 21.9 3.7 30.1 9.6-10.1-22.5-28.7-39-52.9-46-40.28-36.2-66.64-78.82-89.03-121.02zm26.96 0C98.65 32.32 173.5 71.74 240.5 124.5l16.3-11.6C205.6 71.81 149.6 38.58 99.97 17.38zm110.1 0c28.4 8.14 52.8 19.57 75.3 32.83 13 21.96 34.1 36.14 58.6 40.15-7.8-6.38-13.7-15.05-17-26.58 11.7-2.98 22.1-2.09 31.5 1.46-15.5-19.08-37.8-30.23-63-30.76-10.3-6.07-21-11.82-32.3-17.1zm171.3 4.96L321 71.62c-6.1 10.46-12.1 20.92-18.2 31.38-14.6 11.2-26.3 18.7-40.6 29l39.6 22.8h.1l38.3-13.9c37.3 28.7 84.7 43.6 133.5 39.8-21.2-44.6-57.8-78.2-101.5-96.03l-7-39.5zM194.9 148.8l-17.2 46.4c-8.6 8.4-17.2 17.1-25.7 25.7-14.9 5.8-31.2 11.8-46.6 17.5l32.3 32.3 40.6-3.5c28.6 37.3 70.5 64 118.6 72.9-8.9-48.5-35.6-90.5-73.1-119l3.4-40zm123.3 20l-18.2 6.6c17.1 17.7 33.5 38.1 44.3 52.6 1.1 24.4 12.1 46.1 30.6 61.3-3.5-9.5-4.3-19.9-1.4-31.6 11.6 3.3 20.2 9.3 26.6 17.1-4.1-25.4-19-47-42.3-59.9-12-15.9-25.3-31.3-39.6-46.1zM17.34 247.2v49.7c14.05 24.6 33.51 44.5 56.99 61 12.88 23.6 34.67 38.8 60.27 43-7.8-6.4-13.8-15.1-17.1-26.6 11.7-3 22.2-2.1 31.6 1.5-15-18.5-36.3-29.5-60.47-30.7-35.62-23.9-60.18-54.2-71.29-97.9zM441.3 249l-28.7 40.4c-10.5 6-20.9 12.1-31.4 18.1-16.1 1.9-33.2 3.3-49.6 4.8l22.9 39.6 40.1 7.1c17.9 43.5 51.5 80.1 95.7 101.2 4-49.2-10.9-96.7-39.9-133.9l13.7-37.7zm-269.4 83.9l-4.6 49.3c-6.1 10.3-12.2 20.9-18.2 31.4-13 9.6-27 19.4-40.5 28.9l39.6 22.9 38.3-13.9c37.3 28.7 84.6 43.6 133.4 39.8-21.1-44.7-57.7-78.3-101.4-96.1l-7-39.5z"
                  ></path>
                </g>
              </svg>
            </Box>
            <p className="text-gray-700 font-bold text-3xl mt-6">Dynamic</p>
            <p className="lg:text-lg font-normal">
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </Box>

          <Box className="mb-12">
            <Box className="bg-sky-600 h-fit w-fit lg:mb-0 px-4 py-2 rounded-lg mx-auto">
              <svg
                fill="#FFFFFF"
                width={100}
                height={100}
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M492.373 20.482v76.401c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V20.482c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm-269.704 92.457l38.195 66.161c5.655 9.796 18.18 13.152 27.976 7.497s13.152-18.18 7.497-27.976L258.142 92.46c-5.655-9.796-18.18-13.152-27.976-7.497s-13.152 18.18-7.497 27.976zM61.441 310.666l66.161 38.195c9.796 5.655 22.321 2.299 27.976-7.497s2.299-22.321-7.497-27.976L81.92 275.193c-9.796-5.655-22.321-2.299-27.976 7.497s-2.299 22.321 7.497 27.976zm836.66 38.2l66.161-38.195c9.796-5.655 13.152-18.18 7.497-27.976s-18.18-13.152-27.976-7.497l-66.161 38.195c-9.796 5.655-13.152 18.18-7.497 27.976s18.18 13.152 27.976 7.497zM764.837 179.103l38.195-66.161c5.655-9.796 2.299-22.321-7.497-27.976s-22.321-2.299-27.976 7.497l-38.195 66.161c-5.655 9.796-2.299 22.321 7.497 27.976s22.321 2.299 27.976-7.497zM619.705 609.548a20.479 20.479 0 019.029-16.979c53.847-36.315 86.469-95.279 86.469-159.497 0-107.392-90.442-194.744-202.353-194.744s-202.353 87.353-202.353 194.744c0 64.218 32.623 123.181 86.469 159.497a20.48 20.48 0 019.029 16.979v181.903c0 22.143 17.946 40.09 40.09 40.09h133.54c22.134 0 40.079-17.947 40.079-40.09V609.548zm40.96 181.904c0 44.763-36.283 81.05-81.039 81.05h-133.54c-44.765 0-81.05-36.285-81.05-81.05V620.14c-59.555-44.178-95.498-112.657-95.498-187.067 0-130.338 109.092-235.704 243.313-235.704s243.313 105.366 243.313 235.704c0 74.41-35.943 142.89-95.498 187.067v171.312zM410.986 949.054h203.735c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H410.986c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm25.467 76.4h152.801c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H436.453c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"></path>
                </g>
              </svg>
            </Box>
            <p className="text-gray-700 font-bold text-3xl mt-6">Intuitive</p>
            <p className="lg:text-lg font-normal">
              Strong preference for easy to use, intuitive UX/UI.
            </p>
          </Box>
        </Box>
      </section>

      <section className="mb-32">
        <Box className="flex flex-wrap items-center">
          <Box className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
            <Box
              className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="images/avatar.jfif"
                className="w-full"
                alt="feature_img"
              />
            </Box>
          </Box>

          <Box className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
            <p className="text-4xl lg:text-5xl text-center text-sky-500 font-bold">
              Skills
            </p>
            <Box className="mt-6">
              <p className="text-lg font-semibold">CSS</p>
              <BorderLinearProgress variant="determinate" value={90} />
            </Box>
            <Box className="mt-6">
              <p className="text-lg font-semibold">Tailwind CSS</p>
              <BorderLinearProgress variant="determinate" value={95} />
            </Box>
            <Box className="mt-6">
              <p className="text-lg font-semibold">HTML</p>
              <BorderLinearProgress variant="determinate" value={100} />
            </Box>
            <Box className="mt-6">
              <p className="text-lg font-semibold">
                React/React Native(Next.js & Vue.js)
              </p>
              <BorderLinearProgress variant="determinate" value={90} />
            </Box>
            <Box className="mt-6">
              <p className="text-lg font-semibold">JavaScript</p>
              <BorderLinearProgress variant="determinate" value={80} />
            </Box>
            <Box className="mt-6">
              <p className="text-lg font-semibold">TypeScript</p>
              <BorderLinearProgress variant="determinate" value={90} />
            </Box>
            <Box className="mt-6">
              <p className="text-lg font-semibold">Node.js</p>
              <BorderLinearProgress variant="determinate" value={60} />
            </Box>
            <Box className="mt-6">
              <p className="text-lg font-semibold">Express</p>
              <BorderLinearProgress variant="determinate" value={70} />
            </Box>

            <Box className="mt-6">
              <p className="text-lg font-semibold">Laravel</p>
              <BorderLinearProgress variant="determinate" value={70} />
            </Box>
            <Box className="mt-6">
              <p className="text-lg font-semibold">Bubble.io</p>
              <BorderLinearProgress variant="determinate" value={50} />
            </Box>
            <Box className="mt-6">
              <p className="text-lg font-semibold">
                WordPress/Shopify/Woocommerce/ ...
              </p>
              <BorderLinearProgress variant="determinate" value={60} />
            </Box>
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default About;
