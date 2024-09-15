var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var _this = this;
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var degElement = document.getElementById('degree');
    var insElement = document.getElementById('ins');
    var yearElement = document.getElementById('year');
    var skillsElement = document.getElementById('skills');
    var expElement = document.getElementById('exp');
    var refElement = document.getElementById('ref');
    var usernameElement = document.getElementById('username');
    if (!nameElement || !emailElement || !phoneElement || !degElement || !insElement || !yearElement || !skillsElement || !expElement || !refElement || !usernameElement) {
        console.error("One or more elements are missing");
        return;
    }
    var name = nameElement.value.toUpperCase();
    var email = emailElement.value;
    var phone = phoneElement.value;
    var degree = degElement.value;
    var institue = insElement.value;
    var year = yearElement.value;
    var skills = skillsElement.value;
    var experience = expElement.value;
    var reference = refElement.value === "" ? "will be furnished on request." : refElement.value;
    var usernameUrl = usernameElement.value;
    var uniquePath = "Resume/".concat(usernameUrl.replace(/\s+/g, '_'), "_cv.html");
    var output = "\n    <div class=\"output\">\n        <h1>RESUME</h1>\n        <div class=\"resume-content\">\n            <h2 class=\"name\">".concat(name, "</h2>\n            <p class=\"pi\"><strong>Email:</strong> ").concat(email, "</p>\n            <p class=\"pi\"><strong>Phone:</strong> ").concat(phone, "</p>\n            <br>\n            <h3>Education:</h3>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Institute:</strong> ").concat(institue, "</p>\n            <p><strong>Year:</strong> ").concat(year, "</p>\n            <br>\n            <h3>Skills:</h3><ul>").concat(skills, "</ul>\n            <br>\n            <h3>Work Experience:</h3><p>").concat(experience, "</p>\n            <br>\n            <h3>Reference:</h3> ").concat(reference, "\n        </div>\n        <button id=\"edit\">Edit</button>\n    </div>\n    ");
    var downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/html;charset="utf-8,' + encodeURIComponent(output);
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download your resume';
    var generatedOutput = document.getElementById('output');
    if (generatedOutput) {
        generatedOutput.innerHTML = output;
        // generatedOutput.appendChild(downloadLink)                 //*** 
        generatedOutput.classList.remove('hidden');
        //create button container
        var btnContainer = document.createElement('div');
        btnContainer.id = "btnId";
        generatedOutput.appendChild(btnContainer);
        //create download button
        var downloadBtn = document.createElement('d-btn');
        downloadBtn.textContent = "Download as pdf";
        downloadBtn.addEventListener('click', function () {
            window.print();
        });
        btnContainer.appendChild(downloadBtn);
        //create share button
        var shareBtn = document.createElement('s-btn');
        shareBtn.textContent = "Share";
        shareBtn.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var shareableLink, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        shareableLink = "https://yourdomain.com/resume/".concat(name.replace(/\s+/g, '_'), "_cv.html");
                        return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                    case 1:
                        _a.sent();
                        alert("shareable link copied to clipboard.");
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Failed to copy link.", error_1);
                        alert("Failed to copy link to clipboard, Please try again.");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        btnContainer.appendChild(shareBtn);
        var editBtn = document.getElementById('edit');
        if (editBtn) {
            editBtn.addEventListener('click', function () {
                var form = document.getElementById('form');
                if (form) {
                    form.style.display = 'block';
                }
                generatedOutput.style.display = 'none';
            });
        }
    }
    else {
        console.error('output element not found');
    }
    var form = document.getElementById('form');
    if (form) {
        form.style.display = 'none';
    }
    if (generatedOutput) {
        generatedOutput.style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    var generatedOutput = document.getElementById('output');
    if (form && generatedOutput) {
        form.style.display = 'block';
        generatedOutput.style.display = 'none';
    }
});
